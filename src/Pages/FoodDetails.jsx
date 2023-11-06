import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";


const FoodDetails = () => {
    const [foodItem, setFoodItem] = useState([]);

    const allFoodItems = useLoaderData();

    const { detailsId } = useParams();

    useEffect(() => {
        const findFoodId = allFoodItems.find(foodItems => foodItems._id == detailsId);
        setFoodItem(findFoodId);
    }, [detailsId, allFoodItems]);

    return (
        <div className="max-w-7xl mx-auto px-5 py-24">
            <div className="max-w-[1000px] h-[500px] mx-auto rounded-2xl">
                <img src={foodItem.image} alt="" className="w-full h-full object-cover rounded-2xl" />
            </div>

            <div className="max-w-[1000px] mx-auto py-8">
                <p className="text-2xl font-semibold text-[#fa8507] mb-1">
                    ${foodItem.price}.00
                </p>

                <h2 className="text-3xl font-semibold mb-5">
                    {foodItem.foodname}
                </h2>

                <div className="lg:flex items-center gap-8 mb-4">
                    <div className="flex items-center gap-3 mb-4 lg:mb-0">
                        <p className="text-xl">
                            Quantity:
                        </p>
                        <input type="number" defaultValue='1' name="" id="" className="border-2 rounded-lg px-2 w-14 py-1" />
                    </div>

                    <NavLink to={`/purchase/${foodItem._id}`} className="py-2 px-8 bg-[#fa8507] text-[#f5f4fa] cursor-pointer rounded text-xl font-medium">
                        Order now
                    </NavLink>
                </div>

                <div className="mb-5">
                    <p className="text-lg">
                        <span className="font-semibold">Categories:</span> {foodItem.categories}
                    </p>

                    <p className="text-lg">
                        <span className="font-semibold"> Made by:</span> {foodItem.madeby}
                    </p>

                    <p className="text-lg">
                        <span className="font-semibold"> Food Origin:</span> {foodItem.origin}
                    </p>
                </div>

                <p className="text-xl font-semibold mb-2">
                    Description
                </p>

                <p className="text-lg">
                    {foodItem.description}
                </p>
            </div>
        </div>
    );
};

export default FoodDetails;