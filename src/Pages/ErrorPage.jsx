import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>            
            <div className="max-w-7xl mx-auto px-5 py-20 md:py-28 lg:py-36">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-8xl font-bold text-[#fa8507] mb-2">
                        404
                    </h1>

                    <p className="text-[#fa8507] text-3xl font-semibold mb-4">
                        Page Not Found
                    </p>

                    <p className="text-lg max-w-xl text-center mb-10">
                        The page you are looking for doesn't exist. Please try searching for some other page, or return to the website's homepage to find what you're looking for.
                    </p>

                    <NavLink to='/'>
                        <div className="flex justify-center">
                            <button className="text-xl bg-[#fa8507] px-7 py-5 rounded-xl text-white font-medium mb-10">
                                Back to home
                            </button>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;