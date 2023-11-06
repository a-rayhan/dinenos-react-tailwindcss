import FoodCard from "../Components/FoodCard";
import SearchBar from "../Components/SearchBar";

const AllFoods = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-24">

            <div className="pb-20">
                <SearchBar />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
            </div>

            <div className="max-w-md flex justify-center mx-auto pt-14">
                <div className="join grid grid-cols-2">
                    <button className="join-item btn btn-outline">Previous page</button>
                    <button className="join-item btn btn-outline">Next</button>
                </div>
            </div>
        </div>
    );
};

export default AllFoods;