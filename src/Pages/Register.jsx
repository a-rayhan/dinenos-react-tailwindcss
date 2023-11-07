import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Hooks/AuthProvider";
import { Helmet } from "react-helmet-async";

const Register = () => {

    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');

    const { googleLogIn, userRegister, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleSocialLogin = (item) => {
        item()
            .then(result => {
                Swal.fire({
                    title: 'success!',
                    text: 'Register succesfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleRegister = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget)

        const name = form.get('name');
        const img = form.get('img');
        const email = form.get('email');
        const password = form.get('password');

        if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)) {
            setError('You should at least six characters, uppercase, lowercase and number');
        }
        else {
            setError('');

            if (email) {
                userRegister(email, password)
                    .then(result => {
                        updateUserProfile(name, img)
                            .then(() => {
                                Swal.fire({
                                    title: 'success!',
                                    text: 'Registered succesfully',
                                    icon: 'success',
                                    confirmButtonText: 'Ok'
                                })
                                navigate('/')
                            })
                    })
                    .catch(error => {
                        setEmailError('Email already in use')
                    })
            }
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            <Helmet>
                <title> Dinenos - Register</title>
            </Helmet>
            <div className="bg-black max-w-3xl mx-auto p-10 md:p-20 rounded-3xl">
                <div>
                    <h2 className="text-center text-2xl md:text-4xl font-semibold text-white mb-10">
                       Register Now
                    </h2>
                </div>

                <div>
                    <form onSubmit={handleRegister} action="">
                        <div className="w-full md:w-[500px] mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="text-white mb-1">
                                    Name <span className="text-[#fa8507]">*</span>
                                </label>

                                <input type="text" name="name" placeholder="Enter your name" className="max-w-2xl bg-[#fa8507] py-4 px-6 rounded-lg text-white placeholder:text-lg placeholder:text-white" required />
                            </div>
                        </div>

                        <div className="w-full md:w-[500px] mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="text-white mb-1">
                                    Photo Url <span className="text-[#fa8507]">*</span>
                                </label>

                                <input type="text" name='img' placeholder="Enter your photo url" className="max-w-2xl bg-[#fa8507] py-4 px-6 rounded-lg text-white placeholder:text-lg placeholder:text-white" required />
                            </div>
                        </div>

                        <div className="w-full md:w-[500px] mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="text-white mb-1">
                                    Email <span className="text-[#fa8507]">*</span>
                                </label>

                                <input type="email" name="email" placeholder="Enter your email" className="max-w-2xl bg-[#fa8507] py-4 px-6 rounded-lg text-white placeholder:text-lg placeholder:text-white" required />
                            </div>

                            <p className="px-4 text-[#fa8507] text-sm mt-2">
                                {emailError}
                            </p>
                        </div>

                        <div className="md:w-[500px] mx-auto">
                            <div className="flex flex-col">
                                <label className="text-white mb-1">
                                    Password <span className="text-[#fa8507]">*</span>
                                </label>

                                <input type="password" name="password" placeholder="Enter your password" className="max-w-2xl bg-[#fa8507] py-4 px-6 rounded-lg text-white placeholder:text-lg placeholder:text-white" required />
                            </div>

                            <p className="px-4 text-[#fa8507] text-sm mt-2">
                                {error}
                            </p>
                        </div>

                        <div className="flex justify-center items-center mt-7">
                            <button className="text-xl bg-[#fa8507] py-4 w-[500px] rounded-xl text-white font-medium">
                                Register
                            </button>
                        </div>
                    </form>

                    <div>
                        <p className="text-white text-center mt-6">
                            Have already an account? <NavLink to='/login' className='underline text-[#fa8507]'>Login</NavLink>
                        </p>
                    </div>

                    <div onClick={() => handleSocialLogin(googleLogIn)} className="md:w-[500px] bg-transparent border-2 border-[#fa8507] hover:bg-[#fa8507] rounded-xl flex justify-center items-center gap-x-4 mt-10 mx-auto">
                        <div className="bg-white p-1 rounded-full">
                            <FcGoogle className="text-2xl" />
                        </div>
                        <button className="text-xl py-5 text-white font-medium">
                            Register with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;