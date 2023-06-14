import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-purple-500  rounded-sm rounded-md rounded-lg">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/" >Home</Link></li>
                        <li ><Link to="/toy" >All Toys</Link></li>
                        {
                            user?.email && <>

                                <li ><Link to="/toy/:id" >My Toys</Link></li>
                                <li ><Link to="/addtoy" >Add a Toys</Link></li>
                                <li ><Link to="/blogs" >Blogs</Link></li>
                            </>

                        }
                    </ul>
                </div>
                {/* <a className="btn btn-ghost normal-case text-xl text-white">daisyUI</a> */}
                <img className="w-28 h-20 bg-cover" src="./202d014e90df4a03bd2df065a30c6b52.png" alt="" />
            </div>
            <div className="navbar-center  hidden lg:flex">
                <ul className="menu text-white menu-horizontal px-1">
                    <li><Link to="/" >Home</Link></li>
                    <li ><Link to="/toy" >All Toys</Link></li>
                    {
                        user?.email && <>

                            <li ><Link to="/userToy" >My Toys</Link></li>
                            <li ><Link to="/addtoy" >Add a Toys</Link></li>
                            <li ><Link to="/blogs" >Blogs</Link></li>
                        </>

                    }

                </ul>
            </div>
            <div className="navbar-end">
                {user?.email ? <div className="flex">

                    <div className="tooltip  tooltip-bottom " data-tip={user.displayName}>
                        <div className="avatar online me-2">
                            <div className="w-12 h-12 rounded-full">
                                <img src={user.photoURL}  ></img>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-active btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-md text-white" onClick={handleLogOut}>Log out</button>
                </div>
                    : <button className="btn btn-active btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-md text-white"><Link to='/login' >Login</Link></button>
                }

            </div>
        </div>
    );
};

export default Navbar;