import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../SectionTile/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";


const AddClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const onSubmit = async (data) => {
        console.log(data);
        const { name, instructorName, instructorEmail, image, price, totalSeats } = data;
        const classData = { className: name, price: parseFloat(price), instructorName, instructorEmail, classImage: image, availableSeats: parseInt(totalSeats), totalStudent: 0, status: "pending" };
        await axiosSecure.post('/classes', classData)
            .then((data) => {
                console.log('after posting new menu item', data.data)
                if (data.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Item added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset();
                }
            })
    }
    return (
        <div className=" mx-auto max-w-2xl mb-12">
            <Helmet>
                <title>Little Champ | Add Classes</title>
            </Helmet>
            <SectionTitle
                heading={"--Add a class--"}
                subHeading={"Add New Classes for student?"}
            ></SectionTitle>
            <div >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name</span>
                        </label>
                        <input type="text" placeholder="Class Name"
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="flex my-4">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor Name</span>
                            </label>
                            <input type="text" {...register("instructorName",)} value={user?.displayName} placeholder="Type here" className="input input-bordered w-full " readOnly />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input {...register("instructorEmail",)} value={user?.email} className="file-input file-input-bordered w-full" placeholder="type here" readOnly />
                    </div>
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="text" {...register("totalSeats", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" {...register("price", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>
                    <input className="btn btn-outline btn-warning mx-72 max-w-xs mt-4" type="submit" value="Add Class" />
                </form>
            </div>
        </div>
    );
};

export default AddClass;