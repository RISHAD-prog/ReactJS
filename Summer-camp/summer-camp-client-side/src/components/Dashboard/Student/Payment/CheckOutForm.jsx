import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

import "./CheckoutForm.css";
const CheckOutForm = ({ cart, price }) => {
    const stripe = useStripe();
    const { user } = useAuth();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecrect, setClientsecrect] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    console.log(price);
    useEffect(() => {
        const fetchClientSecret = async () => {
            try {
                const res = await axiosSecure.post("/create-payment-intent", { price });
                setClientsecrect(res.data.clientSecrect);
            } catch (error) {
                // Handle error
            }
        };

        if (price > 0) {
            fetchClientSecret();
        }
    }, [price, axiosSecure]);
    console.log(clientSecrect);
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setCardError(error.message);
        }
        else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError(' ');
        }
        setProcessing(true);
        const { paymentIntent, error: confirmedError } = await stripe.confirmCardPayment(
            clientSecrect,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email,
                        name: user?.displayName,
                    },
                },
            },
        )
        if (confirmedError) {
            console.log(confirmedError);
        }
        setProcessing(false);
        console.log("[paymentIntent]", paymentIntent);

        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id);
            const items = {
                email: user?.email,
                name: user?.displayName,
                currency: paymentIntent.currency,
                price,
                transactionId: paymentIntent.id,
                classId: cart.classId,
                status: 'enrolled',
                className: cart.className,
                date: new Date(),
            }
            axiosSecure.post(`/payment/${cart._id}`, items)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertItem.insertedId) {
                        Swal.fire(
                            'Good job!',
                            'Your Transaction has completed!',
                            'success'
                        )
                    }
                })
        }
    }

    return (
        <div>
            <div>
                <p className="text-4xl ms-96 mb-3" >Payment</p>
                <form className=" w-full " onSubmit={handleSubmit}>
                    <CardElement
                        className="mb-3"
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className="btn btn-outline btn-primary mt-2 w-24 ms-80" type="submit" disabled={!stripe || !clientSecrect || processing}>
                        Pay
                    </button>
                </form>
                {cardError && <p className="text-red-600" >{cardError}</p>}
                {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
            </div>
        </div>
    );
};

export default CheckOutForm;