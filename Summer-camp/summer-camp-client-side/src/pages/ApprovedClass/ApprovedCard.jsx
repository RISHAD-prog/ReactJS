import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const ApprovedCard = ({ allClass, role }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const { _id, className, classImage, price, instructorName, instructorEmail } = allClass;
    const handleSelectedClass = () => {
        const classItem = { userEmail: user?.email, classId: _id, className, classImage, price, instructorName, instructorEmail };
        if (user) {
            axios.put('https://little-chams-server-side.vercel.app/studentCart', classItem)
                .then((data) => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'class added on the desk.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
                .catch(error => alert(error.message))
        }
        else {
            Swal.fire({
                title: 'Please login to all the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }

    }


    return (
        <div className={allClass.availableSeats === 0 ? "card w-96 max-h-96 bg-red-600 shadow-xl" : "card w-96 max-h-96 bg-success shadow-xl"} >
            <figure className="px-10 pt-10">
                <img src={allClass.classImage} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Course: {allClass.className}</h2>
                <p>Instructor:{allClass.instructorName}</p>
                <p>price: ${allClass.price}</p>
                <div className=" card-actions" >
                    <button onClick={handleSelectedClass} disabled={allClass.availableSeats === 0 || role === 'admin' || role === 'instructor'} className=" btn btn-outline btn-neutral">Select Class</button>
                </div>


            </div>
        </div>
    );
};

export default ApprovedCard;