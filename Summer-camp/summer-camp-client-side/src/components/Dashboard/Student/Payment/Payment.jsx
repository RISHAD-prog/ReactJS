import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../SectionTile/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);



const Payment = () => {

    const { id } = useParams();
    console.log(id);
    const { loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: specCart = [] } = useQuery({
        queryKey: ['specCart'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/cartClass/${id}`)
            console.log('res from axios', res)
            return res.data;
        }
    })

    const price = specCart.price;

    return (
        <div>
            <Helmet>
                <title>Little Champ | Payment</title>
            </Helmet>
            <div className="mx-56 mb-48">
                <SectionTitle
                    heading={"--PAYMENT GATEWAY--"}
                    subHeading={"Your Payment is always secure here"}
                ></SectionTitle>
            </div>

            <Elements stripe={stripePromise}>
                <CheckOutForm cart={specCart} price={price} />
            </Elements>

        </div>


    );
};

export default Payment;