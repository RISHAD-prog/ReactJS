import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../../hooks/useCart";
import { RiSecurePaymentFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../SectionTile/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const SelectedClass = () => {
    const [cartClass, refetch] = useCart();
    const [axiosSecure] = useAxiosSecure();
    const handleDelete = (id) => {
        axiosSecure.delete(`/selectedClass/${id}`)
            .then(res => {
                console.log(res);
                if (res.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'class has been deleted',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    return (
        <div>
            <Helmet>
                <title>Little Champ | Payment</title>
            </Helmet>
            <div className="mx-56 mb-14">
                <SectionTitle
                    heading={"--Selected Classes--"}
                    subHeading={"Enroll to the selected class"}
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
                            <th>Delete Class</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cartClass.map((student, index) =>
                                <tr key={student._id} >
                                    <th>{index + 1}</th>
                                    <td>{student.className}</td>
                                    <td>{student.price}</td>
                                    <td><button onClick={() => handleDelete(student._id)} className="btn btn-outline btn-warning"><FaTrashAlt className="w-7 h-7" ></FaTrashAlt></button></td>
                                    <td><button className="btn btn-outline btn-error"> <Link to={`/dashboard/payment/${student._id}`}><RiSecurePaymentFill className="w-7 h-7" ></RiSecurePaymentFill></Link></button></td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClass;