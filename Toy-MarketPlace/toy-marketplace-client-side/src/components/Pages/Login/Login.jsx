import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../../hook/useTitle";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    useTitle("login");
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                alert('login successfull');
                navigate(from, { replace: true })

            })
            .catch(error => console.log(error));
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
                    <h1 className="text-5xl font-bold">Welcome to Login!</h1>
                    <p className="pt-6">New to our store?</p>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-ghost"><Link to='/register' >Sign up</Link></button>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <h1 className="text-5xl font-bold">Login now!</h1>
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
                            <div className="form-control mt-6">
                                <button className="btn bg-purple-500 btn-primary">Login</button>
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
        </div>
    );
};

export default Login;