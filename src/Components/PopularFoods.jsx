import { NavLink } from "react-router-dom";
import PopularFoodsCard from "./PopularFoodsCard";

const PopularFoods = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-24">
            <h2 className="text-4xl font-semibold mb-10">
                Popular Foods
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PopularFoodsCard />
                <PopularFoodsCard />
                <PopularFoodsCard />
                <PopularFoodsCard />
                <PopularFoodsCard />
                <PopularFoodsCard />
            </div>

            <div className="flex justify-center pt-14">
                <button>
                    <NavLink to='/allfoods' className="py-3 px-12 bg-[#fa8507] text-[#f5f4fa] cursor-pointer rounded text-lg font-medium">
                        See all
                    </NavLink>
                </button>
            </div>
        </div>
    );
};

export default PopularFoods;