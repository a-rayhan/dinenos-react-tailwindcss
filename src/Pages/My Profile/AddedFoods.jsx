import { NavLink, useLoaderData } from "react-router-dom";
import AddedFoodsCard from "../../Components/AddedFoodsCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Hooks/AuthProvider";
import { Helmet } from "react-helmet-async";

const AddedFoods = () => {
    const [foodsItems, setFoodsItems] = useState([]);

    const allFoodsItems = useLoaderData();

    const { user } = useContext(AuthContext);


    useEffect(() => {
        const foodsItemsFilter = allFoodsItems.filter(foodsItems => user.email == foodsItems.email);
        setFoodsItems(foodsItemsFilter);
    }, [user, allFoodsItems]);
    return (
        <div
            className="max-w-7xl mx-auto px-5 py-24"
            data-aos="fade-up"
            data-aos-duration="1000">
            <Helmet>
                <title> Dinenos - Added foods</title>
            </Helmet>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    foodsItems.map(foodsItem => <AddedFoodsCard key={foodsItem._id} foodsItem={foodsItem} />)
                }

                {
                    foodsItems.length === 0 && (
                        <div className="py-24">
                            <p className="text-[#fa8507] text-3xl font-semibold mb-4 text-center">
                                There is no product here.
                            </p>
                            <NavLink to='/allfoods'>
                                <div className="flex justify-center">
                                    <button className="text-lg bg-[#fa8507] px-8 py-4 rounded-xl text-white font-medium">
                                        Buy Now
                                    </button>
                                </div>
                            </NavLink>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AddedFoods;