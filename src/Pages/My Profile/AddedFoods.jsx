import { useLoaderData } from "react-router-dom";
import AddedFoodsCard from "../../Components/AddedFoodsCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Hooks/AuthProvider";

const AddedFoods = () => {
    const [foodsItems, setFoodsItems] = useState([]);

    const allFoodsItems = useLoaderData();

    const { user } = useContext(AuthContext);


    useEffect(() => {
        const foodsItemsFilter = allFoodsItems.filter(foodsItems => user.email == foodsItems.email);
        setFoodsItems(foodsItemsFilter);
    }, [user, allFoodsItems]);
    return (
        <div className="max-w-7xl mx-auto px-5 py-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    foodsItems.map(foodsItem => <AddedFoodsCard key={foodsItem._id} foodsItem={foodsItem} />)
                }
            </div>
        </div>
    );
};

export default AddedFoods;