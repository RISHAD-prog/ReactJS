import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { motion } from "framer-motion";
import { BiLoader } from "react-icons/bi";
import { LuShieldClose } from "react-icons/lu";
import { MdDoneOutline } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../SectionTile/SectionTitle";

const MyClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();

    const { data: classes = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/${user?.email}`);
            return res.data;
        }
    })
    const [isOpen, setIsOpen] = useState(false);


    const openModal = () => {
        const modal = document.getElementById("my_modal_5");
        if (modal) {
            modal.showModal();
            setIsOpen(true);
        }
    };

    const closeModal = () => {
        const modal = document.getElementById("my_modal_5");
        if (modal) {
            modal.close();
            setIsOpen(false);
        }
    };

    // const submitFeedback = (classId) => {
    //     axiosSecure.patch(`https://little-chams-server-side.vercel.app/classes/feedback/${classId}`, { feedback })
    //         .then(() => {
    //             alert("Feedback submitted successfully");
    //             closeModal();
    //         })
    //         .catch((error) => {
    //             alert("Error submitting feedback:", error);
    //         });
    // };
    return (
        <div>
            <Helmet>
                <title>Little Champ | My Classes</title>
            </Helmet>
            <SectionTitle
                heading={"--All approved class--"}
                subHeading={" Classes for instructors"}
            ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Enrolled Student</th>
                            <th>Processing</th>
                            <th>Approved</th>
                            <th>Denied</th>
                            <th>FeedBack</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((myClass, index) =>
                                <>
                                    <tr >
                                        <th>
                                            <label>
                                                {index + 1}
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={myClass.classImage} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{myClass.className}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {myClass.instructorName}
                                        </td>
                                        <td>
                                            {myClass.totalStudent}
                                        </td>
                                        <td>

                                            <motion.button
                                                disabled={myClass.status === 'pending'} className="btn btn-outline btn-warning" whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 17 }}><BiLoader className=" w-7 h-7"></BiLoader> </motion.button>

                                        </td>
                                        <td>
                                            <motion.button
                                                disabled={myClass.status === 'approved' || myClass.status === 'denied'} className={myClass.status === 'approved' ? "btn btn-outline btn-success" : "btn btn-outline btn-warning"} whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 17 }}><MdDoneOutline className=" w-7 h-7"></MdDoneOutline></motion.button>
                                        </td>
                                        <td>
                                            <motion.button
                                                disabled={myClass.status === 'denied' || myClass.status === 'approved'} className={myClass.status === 'denied' ? "btn btn-outline btn-error" : "btn btn-outline btn-warning"} whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 17 }}><LuShieldClose className=" w-7 h-7"></LuShieldClose></motion.button>
                                        </td>
                                        <td>
                                            <motion.button onClick={isOpen ? closeModal : openModal}
                                                className={myClass.feedback ? "btn btn-outline btn-success" : "btn btn-outline btn-warning"} whileHover={{ scale: 1.2 }}
                                                disabled={myClass.status === 'approved' || myClass.status === 'pending'}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 17 }}><VscFeedback className=" w-7 h-7"></VscFeedback></motion.button>

                                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                                <div method="dialog" className="modal-box">
                                                    <h3 className="font-bold text-lg">Hello!</h3>
                                                    <p className="py-4 px-3">{myClass.feedback}</p>
                                                    <p className="py-4">Press ESC key or click the button below to close</p>
                                                    <div className="modal-action">

                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn">Close</button>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </td>

                                    </tr>
                                </>

                            )
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyClass;