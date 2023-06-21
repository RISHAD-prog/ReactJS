import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { AuthContext } from "../../components/Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FcPositiveDynamic, FcServices, FcSportsMode } from "react-icons/fc";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const [checked, setChecked] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathName || "/";
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleChange = () => {
        setChecked(!checked);
        setPasswordVisible(!passwordVisible);
    }
    const onSubmit = data => {

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user?.email}has been logged in`,
                    showConfirmButton: false,
                    timer: 1500
                })
                reset();
                navigate(from, { replace: true })
            })
            .catch(error => alert(error.message));
    }
    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user?.displayName}has been logged in`,
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="">
            <Helmet>
                <title>Little Champs | Login</title>
            </Helmet>
            <div className="hero  bg-base-100 px-64 ">

                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Login now!</h1>
                        <p className="font-bold text-2xl ">Choose best courses available </p>
                        <p className="text-xl flex items-center mt-5"> <FcPositiveDynamic className="w-12 h-12"></FcPositiveDynamic> Learn different Skills</p>
                        <p className="text-xl flex items-center" > <FcServices className="w-12 h-12"></FcServices> Learn to grow physical abilities</p>
                        <p className="text-xl flex items-center" > <FcSportsMode className="w-12 h-12"></FcSportsMode> Learn more about indoor and outdoor games</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
                                {errors.email?.type === 'required' && <span className=" text-red-500 " >Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input type={passwordVisible ? 'text' : 'password'} placeholder="password" {...register("password", { required: true, })} className="input input-bordered" />
                                <input type="checkbox"
                                    className="toggle toggle-success mt-2"
                                    checked={checked}
                                    onChange={handleChange} />

                                {errors.password?.type === 'required' && <span className=" text-red-500 " >Password field is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" onClick={handleSubmit(onSubmit)} >Login</button>
                            </div>
                            <div className="flex flex-col w-full border-opacity-50">
                                <p>New Here?<Link to='/register' className=' text-blue-700 ' > Go to Registration</Link></p>
                                <div className="divider">OR</div>
                                <div className="btn btn-outline btn-accent h-12 card bg-base-300 rounded-box place-items-center" onClick={handleGoogle}  ><BsGoogle ></BsGoogle></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;