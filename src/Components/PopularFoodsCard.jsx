import { TbTruckDelivery } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const PopularFoodsCard = () => {
    return (
        <div>
            <div className="w-full rounded-lg cursor-pointer bg-gray-100 p-4">
                <div className="w-full h-56 rounded-2xl bg-slate-400 mb-4 relative">
                    <img
                        src="https://images.unsplash.com/photo-1635685296916-95acaf58471f?auto=format&fit=crop&q=80&w=1888&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="w-full h-full rounded-2xl object-cover"
                    />

                    <div className="absolute bottom-4 left-4 bg-white py-1 px-2 text-sm rounded-lg">
                        <div className="flex items-center gap-1">
                            <TbTruckDelivery className="text-xl text-[#fa8507]" />
                            <span>10 orders</span>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="mb-5">
                        <p className="text-2xl font-semibold">
                            Ramen Noodles
                        </p>

                        <p className="text-sm">
                            Category: noodles
                        </p>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="border-2 border-[#fa8507] py-1 px-3 rounded-xl text-[#fa8507] cursor-pointer font-semibold">
                            $14.45
                        </p>

                        <NavLink to='/fooddetails' className="py-2 px-4 bg-[#fa8507] text-[#f5f4fa] cursor-pointer rounded text-lg font-medium">
                            Details
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularFoodsCard;