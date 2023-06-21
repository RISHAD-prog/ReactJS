import { GiTeacher } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import { motion } from "framer-motion";
const UserTable = ({ user, index, handleRoleUpdate }) => {

    const setRole = (userId, role) => {
        handleRoleUpdate(userId, role);
    };
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
                            <img src={user.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{user.name}</div>
                    </div>
                </div>
            </td>
            <td>
                {user.email}
            </td>
            <td>

                <motion.button onClick={() => setRole(user._id, 'instructor')}
                    disabled={user.role === 'instructor'} className="btn btn-outline btn-warning" whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}><GiTeacher className=" w-7 h-7"></GiTeacher> </motion.button>

            </td>
            <th>
                <motion.button onClick={() => setRole(user._id, 'admin')}
                    disabled={user.role === 'admin'} className="btn btn-outline btn-warning" whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}><RiAdminFill className=" w-7 h-7"></RiAdminFill></motion.button>
            </th>
        </tr>

    );
};

export default UserTable;