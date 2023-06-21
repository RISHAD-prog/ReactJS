import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FcPositiveDynamic, FcServices, FcSportsMode } from "react-icons/fc";
import { AuthContext } from "../../components/Provider/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
const Registration = () => {
    const [checked, setChecked] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [conPasschecked, setConPassChecked] = useState(true);
    const [conPasswordVisible, setconPasswordVisible] = useState(false);
    const { createUser, googleSignIn, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const handlepassChange = () => {
        setChecked(!checked);
        setPasswordVisible(!passwordVisible);
    }
    const handleconPassChange = () => {
        setConPassChecked(!conPasschecked);
        setconPasswordVisible(!conPasswordVisible);
    }
    const addUser = (name, email, image, role) => {
        const userData = {
            name: name,
            email: email,
            image: image,
            role: role
        };
        fetch('https://little-chams-server-side.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .catch(error => alert(error.message))
    }
    let error = "";
    const onSubmit = data => {
        console.log(data);
        if (data.password !== data.conPassword) {
            error = <span className=" text-red-500 " >Password does not match</span>
            return error;
        }
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        addUser(data.name, data.email, data.photoUrl, "student");
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `Welcome!!!${user?.displayName}`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
                navigate('/');

            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}. try use new email and name`
                })
            });
    }
    const handleGoogle = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                addUser(user.displayName, user.email, user.photoURL);
                navigate('/');
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}. try use new email and name`

                })
            })
    }
    return (
        <div className="hero  bg-base-200 p-24">
            <Helmet>
                <title>Little Champs | Registration</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row mt-5">
                <div className="text-center lg:text-left">
                    <p className="font-bold text-3xl pe-40">Choose best courses available for you and build you extra-curricular activity.</p>
                    <p className="text-2xl flex items-center mt-5"> <FcPositiveDynamic className="w-12 h-12"></FcPositiveDynamic> Learn different Skills</p>
                    <p className="text-2xl flex items-center" > <FcServices className="w-12 h-12"></FcServices> Learn to grow physical abilities</p>
                    <p className="text-2xl flex items-center" > <FcSportsMode className="w-12 h-12"></FcSportsMode> Learn more about indoor and outdoor games</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <div className="card-body">
                        <div className="form-control">
                            <h1 className="text-5xl font-bold">Registration </h1>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true, minLength: 7, maxLength: 20 })} placeholder="name" name="name" className="input input-bordered" />
                            {errors.name?.type === 'required' && <span className=" text-red-500 " >Name field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoUrl</span>
                            </label>
                            <input type="text" {...register("photoUrl", { required: true })} placeholder="Give the URL" className="input input-bordered" />
                            {errors.photoUrl?.type === 'required' && <span className=" text-red-500 " >PhotoURL field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" name="email" className="input input-bordered" />
                            {errors.email?.type === 'required' && <span className=" text-red-500 " >Email field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={passwordVisible ? 'text' : 'password'} {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*[0-9])(?=.*[a-z])/ })} placeholder="password" name="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <span className=" text-red-500 " >Password field is required</span>}
                            {errors.password?.type === 'minLength' && <span className=" text-red-500 " >Password must have 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span className=" text-red-500 " >Password must be less than 20 characters</span>}
                            {errors.password?.type === 'pattern' && <span className=" text-red-500 " >Password must have at least one uppercase letter, one lowercase letter, one number and one special character</span>}
                            <input type="checkbox"
                                className=" toggle toggle-accent mt-2"
                                checked={checked}
                                onChange={handlepassChange} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type={conPasswordVisible ? 'text' : 'password'} {...register("conPassword", { required: true, })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <span className=" text-red-500 " >Password field is required</span>}
                            {error}
                            <input type="checkbox"
                                className=" toggle toggle-accent mt-2"
                                checked={conPasschecked}
                                onChange={handleconPassChange} />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" onClick={handleSubmit(onSubmit)} className="btn btn-primary" value="Register" />
                        </div>
                        <div className="flex flex-col w-full border-opacity-50">
                            <p>Already have an account ?Goto <Link to="/login" className=" text-blue-600 " >Login</Link></p>
                            <div className="divider">OR</div>
                            <div className="btn btn-outline btn-accen h-12 card bg-base-300 rounded-box place-items-center" onClick={handleGoogle} ><BsGoogle ></BsGoogle></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;