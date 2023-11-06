import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AuthContext } from "../Hooks/AuthProvider";

const Login = () => {

    const [passError, setPassError] = useState('');
    const [error, setError] = useState('');

    const { googleLogIn, userLogin } = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();

    const handleSocialLogin = (item) => {
        item()
            .then(result => {
                Swal.fire({
                    title: 'success!',
                    text: 'Login with Google succesfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    const handleLogin = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget)

        const email = form.get('email');
        const password = form.get('password');

        if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)) {
            setPassError('Wrong password');
        }
        else {
            setPassError('');
            setError('');

            if (email) {
                userLogin(email, password)
                    .then(result => {
                        Swal.fire({
                            title: 'success!',
                            text: 'Login succesfully',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                        navigate(location?.state ? location.state : '/')

                    })
                    .catch(error => {
                        setError('Wrong email address')
                    })
            }
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="bg-black max-w-3xl mx-auto p-10 md:p-20 rounded-3xl">
                <div>
                    <h2 className="text-center text-2xl md:text-4xl font-semibold text-white mb-10">
                        Login Now
                    </h2>
                </div>

                <div>
                    <form onSubmit={handleLogin} action="">
                        <div className="w-full md:w-[500px] mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="text-white mb-1">
                                    Email <span className="text-[#fa8507]">*</span>
                                </label>

                                <input type="email" name="email" placeholder="Enter your email" className="max-w-2xl bg-[#fa8507] py-4 px-6 rounded-lg text-white placeholder:text-lg placeholder:text-white" required />
                            </div>

                            <p className="px-4 text-[#fa8507] text-sm mt-2">
                                {error}
                            </p>
                        </div>

                        <div className="md:w-[500px] mx-auto">
                            <div className="flex flex-col">
                                <label className="text-white mb-1">
                                    Password <span className="text-[#fa8507]">*</span>
                                </label>

                                <input type="password" name="password" placeholder="Enter your password" className="max-w-2xl bg-[#fa8507] py-4 px-6 rounded-lg text-white placeholder:text-lg placeholder:text-white" />
                            </div>

                            <p className="px-4 text-[#fa8507] text-sm mt-2">
                                {passError}
                            </p>
                        </div>

                        <div className="flex justify-center items-center mt-7">
                            <button className="text-xl bg-[#fa8507] py-4 w-[500px] rounded-xl text-white font-medium">
                                Login
                            </button>
                        </div>
                    </form>

                    <div>
                        <p className="text-white text-center mt-6">
                            If you're new here, please <NavLink to='/register' className='underline text-[#fa8507]'>Register</NavLink>
                        </p>
                    </div>

                    <div onClick={() => handleSocialLogin(googleLogIn)} className="md:w-[500px] bg-transparent border-2 border-[#fa8507] hover:bg-[#fa8507] rounded-xl flex justify-center items-center gap-x-4 mt-10 mx-auto">
                        <div className="bg-white p-1 rounded-full">
                            <FcGoogle className="text-2xl" />
                        </div>
                        <button className="text-xl py-5 text-white font-medium">
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;