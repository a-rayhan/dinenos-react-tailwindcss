import { TbTruckDelivery } from "react-icons/tb";
import { FiEdit2 } from "react-icons/fi";
import { NavLink, useParams } from "react-router-dom";

const AddedFoodsCard = ({ foodsItem }) => {
    const { _id, foodname, categories, quantity, image, price } = foodsItem;

    const { id } = useParams();

    return (
        <div className="w-full rounded-lg cursor-pointer bg-gray-100 p-4">
            <div className="w-full h-56 rounded-2xl bg-slate-400 mb-4 relative">
                <img src={image} alt="" className="w-full h-full rounded-2xl object-cover" />

                <div className="absolute bottom-4 left-4 bg-white py-1 px-2 text-sm rounded-lg">
                    <div className="flex items-center gap-1">
                        <TbTruckDelivery className="text-xl text-[#fa8507]" />
                        <span>10 orders</span>
                    </div>
                </div>

                <NavLink to='/updatefood' className="absolute bottom-4 right-4 bg-white py-1 px-2 text-sm rounded-lg">
                    <div className="flex items-center gap-2">
                        <p>
                            Update
                        </p>

                        <FiEdit2 />
                    </div>
                </NavLink>
            </div>

            <div>
                <div className="mb-5">
                    <p className="text-2xl font-semibold">
                        {foodname}
                    </p>

                    <p className="text-sm">
                        Category: {categories}
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <p className="border-2 border-[#fa8507] py-1 px-3 rounded-xl text-[#fa8507] cursor-pointer font-semibold">
                        ${price}.00
                    </p>

                    <NavLink to={`/fooddetails/${_id}`} className="py-2 px-4 bg-[#fa8507] text-[#f5f4fa] cursor-pointer rounded text-lg font-medium">
                        Details
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default AddedFoodsCard;