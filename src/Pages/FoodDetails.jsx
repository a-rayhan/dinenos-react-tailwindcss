import { NavLink } from "react-router-dom";

const FoodDetails = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-24">
            <div className="max-w-[1000px] h-[500px] mx-auto rounded-2xl">
                <img src="https://images.unsplash.com/photo-1635685296916-95acaf58471f?auto=format&fit=crop&q=80&w=1888&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover rounded-2xl" />
            </div>

            <div className="max-w-[1000px] mx-auto py-8">
                <p className="text-2xl font-semibold text-[#fa8507] mb-1">
                    $18.00
                </p>

                    <h2 className="text-3xl font-semibold mb-5">
                        Parmesan Vegetable
                    </h2>

                <div className="lg:flex items-center gap-8 mb-4">
                    <div className="flex items-center gap-3 mb-4 lg:mb-0">
                        <p className="text-xl">
                            Quantity:
                        </p>
                        <input type="number" defaultValue='1' name="" id="" className="border-2 rounded-lg px-2 w-14 py-1" />
                    </div>

                    <NavLink to='/purchase' className="py-2 px-8 bg-[#fa8507] text-[#f5f4fa] cursor-pointer rounded text-xl font-medium">
                        Order now
                    </NavLink>
                </div>

                <div className="mb-5">
                    <p className="text-lg">
                        <span className="font-semibold">Categories:</span> noodles
                    </p>

                    <p className="text-lg">
                       <span className="font-semibold"> Made by:</span> Abu Rayhan
                    </p>

                    <p className="text-lg">
                       <span className="font-semibold"> Food Origin:</span> Bangladesh
                    </p>
                </div>

                <p className="text-xl font-semibold mb-2">
                    Description
                </p>

                <p className="text-lg">
                    Assertively conceptualize parallel process improvements through user friendly action items. Interactively cultivate interdependent customer service without clicks-and-mortar e-services. Proactively cultivate go forward testing procedures with accurate quality vectors. Globally embrace ethical functionalities via empowered scenarios. Phosfluorescently restore highly efficient opportunities and client-focused infomediaries.

                    Enthusiastically transition multidisciplinary “outside the box” thinking without premium networks. Progressively supply clicks-and-mortar human capital through enterprise-wide web services. Objectively provide access to extensible processes through 24/365 solutions. Professionally actualize client-based leadership via out-of-the-box supply chains. Collaboratively unleash e-business human capital through plug-and-play metrics.
                </p>
            </div>
        </div>
    );
};

export default FoodDetails;