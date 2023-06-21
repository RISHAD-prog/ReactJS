import { NavLink, Outlet } from "react-router-dom";
import { BsFillMenuButtonWideFill, BsHouseExclamation } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import { FaMoneyBillAlt, FaSchool, FaUsersCog } from "react-icons/fa";
import useRole from "../hooks/useRole";
import { motion } from "framer-motion";
const Dashboard = () => {
    const [userRole] = useRole();
    const role = userRole?.role;

    return (
        <div className=" mx-52">
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="btn btn-outline btn-warning drawer-button">  <BsFillMenuButtonWideFill className=" w-8 h-8" ></BsFillMenuButtonWideFill> </label>
                    <Outlet></Outlet>
                </div>
                <div className=" mx-52 drawer-side">
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <label htmlFor="my-drawer" className="drawer-button drawer-overlay">
                            <AiFillCloseCircle className="h-6 w-12 btn btn-circle btn-outline btn-error mb-14"></AiFillCloseCircle>
                        </label>
                        <div className="font-bold mb-11 font-mono">
                            <p className="text-2xl">---LITTLE CHAMS---</p>
                            <p className="text-2xl">~~~SUMMER CAMP~~~</p>
                        </div>
                        {
                            role === 'admin' && <>
                                <li><NavLink to='/dashboard/manageUser'> <FaUsersCog className="w-8 h-6"></FaUsersCog>MANAGE USER</NavLink></li>
                                <li><NavLink to='/dashboard/manageClass'> <SiGoogleclassroom className="w-8 h-6"></SiGoogleclassroom> MANAGE CLASS</NavLink></li>
                            </>
                        }
                        {role === 'instructor' && <>
                            <li><NavLink to='/dashboard/addClass'> <FaUsersCog className="w-8 h-6"></FaUsersCog>ADD a Class</NavLink></li>
                            <li><NavLink to='/dashboard/myClass'> <SiGoogleclassroom className="w-8 h-6"></SiGoogleclassroom>My Class</NavLink></li> </>}
                        {role === 'student' && <>
                            <li><NavLink to='/dashboard/selectedClass'> <FaUsersCog className="w-8 h-6"></FaUsersCog>My Selected Class</NavLink></li>
                            <li><NavLink to='/dashboard/enrolledClass'> <SiGoogleclassroom className="w-8 h-6"></SiGoogleclassroom> My Enrolled Class</NavLink></li>
                            <li><NavLink to='/dashboard/paymentHistory'> <FaMoneyBillAlt className="w-8 h-6"></FaMoneyBillAlt>Payment History</NavLink></li>
                        </>}

                        <div className="divider"></div>
                        <li>
                            <motion.div

                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <NavLink to='/'
                                    className="flex items-center"
                                > <BsHouseExclamation className="w-8 h-6"></BsHouseExclamation> <span className="uppercase" > HOME </span> </NavLink>
                            </motion.div>
                        </li>
                        <li>
                            <motion.div

                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <NavLink to='/approvedClasses'
                                    className="flex items-center"
                                > <FaSchool className="w-8 h-6"></FaSchool> <span className="uppercase" >Classes</span>  </NavLink>
                            </motion.div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;