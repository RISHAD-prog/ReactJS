import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../SectionTile/SectionTitle";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: paymentHistory = [] } = useQuery({
        queryKey: ['paymentHistory'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        }
    })
    return (
        <div>
            <Helmet>
                <title>Little Champ | Payment History</title>
            </Helmet>
            <div className="mx-56 mb-48">
                <SectionTitle
                    heading={"--Payment History--"}
                    subHeading={"Enrolled classes after payment"}
                ></SectionTitle>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>TransactionId</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentHistory.map((student, index) =>
                                <tr key={student._id} >
                                    <th>{index + 1}</th>
                                    <td>{student.className}</td>
                                    <td>{student.price}</td>
                                    <td>{student.date}</td>
                                    <td>{student.transactionId}</td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;