import { motion } from "framer-motion";
import { useState } from "react";
import { BiLoader } from "react-icons/bi";
import { LuShieldClose } from "react-icons/lu";
import { MdDoneOutline } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
const ClassTable = ({ allclass, index, handleStatusUpdate }) => {
    const [axiosSecure] = useAxiosSecure();
    const setStatus = (classId, status) => {
        handleStatusUpdate(classId, status);
    };
    const [isOpen, setIsOpen] = useState(false);
    const [feedback, setFeedback] = useState("");

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

    const submitFeedback = (classId) => {
        axiosSecure.patch(`https://little-chams-server-side.vercel.app/classes/feedback/${classId}`, { feedback })
            .then(() => {
                alert("Feedback submitted successfully");
                closeModal();
            })
            .catch((error) => {
                alert("Error submitting feedback:", error);
            });
    };
    console.log(isOpen)
    return (
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
                            <img src={allclass.classImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{allclass.name}</div>
                    </div>
                </div>
            </td>
            <td>
                {allclass.instructorName}
            </td>
            <td>
                {allclass.instructorEmail}
            </td>
            <td>

                <motion.button onClick={() => setStatus(allclass._id, 'pending')}
                    disabled={allclass.status === 'pending'} className="btn btn-outline btn-warning" whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}><BiLoader className=" w-7 h-7"></BiLoader> </motion.button>

            </td>
            <td>
                <motion.button onClick={() => setStatus(allclass._id, 'approved')}
                    disabled={allclass.status === 'approved' || allclass.status === 'denied'} className={allclass.status === 'approved' ? "btn btn-outline btn-success" : "btn btn-outline btn-warning"} whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}><MdDoneOutline className=" w-7 h-7"></MdDoneOutline></motion.button>
            </td>
            <td>
                <motion.button onClick={() => setStatus(allclass._id, 'denied')}
                    disabled={allclass.status === 'denied' || allclass.status === 'approved'} className={allclass.status === 'denied' ? "btn btn-outline btn-error" : "btn btn-outline btn-warning"} whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}><LuShieldClose className=" w-7 h-7"></LuShieldClose></motion.button>
            </td>
            <td>
                <motion.button onClick={isOpen ? closeModal : openModal}
                    className={feedback ? "btn btn-outline btn-success" : "btn btn-outline btn-warning"} whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}><VscFeedback className=" w-7 h-7"></VscFeedback></motion.button>

                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <textarea
                            className="textarea textarea-primary w-full"
                            placeholder="Enter your feedback"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                        ></textarea>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <button className="btn btn-outline btn-success" onClick={() => submitFeedback(allclass._id)}>
                                Submit
                            </button>
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </div>
                    </form>
                </dialog>

            </td>
        </tr>
    );
};

export default ClassTable;
