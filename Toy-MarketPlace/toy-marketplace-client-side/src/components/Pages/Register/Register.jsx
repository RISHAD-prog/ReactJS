import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import useTitle from "../../../hook/useTitle";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
    const { createUser, additionalInfo, googleSignIn } = useContext(AuthContext);
    useTitle('register')
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photoUrl.value;
        console.log(name, email, password, photo);


        createUser(email, password)
            .then(result => {
                const user = result.user;
                additionalInfo(name, photo)
                toast(`created user ${user.displayName}`)
            })
            .catch(error => toast(error))

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content bg-purple-500 flex-col lg:flex-row">
                <div className=" text-white  text-left  lg:text-center">
                    <h1 className="text-5xl font-bold">Welcome to Registration!</h1>
                    <p className="pt-6">Already Have an Account?</p>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-ghost"><Link to='/login' >Sign In</Link></button>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSignUp} >
                            <div className="form-control">
                                <h1 className="text-5xl font-bold">Register now!</h1>
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name="password" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="url" name="photoUrl" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-purple-500 btn-primary">Register</button>
                            </div>
                        </form>
                        <div>
                            <div className="divider">OR</div>
                            <div className="text-center">
                                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                                    <FaGoogle></FaGoogle>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;