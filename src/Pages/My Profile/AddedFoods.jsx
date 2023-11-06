import AddedFoodsCard from "../../Components/AddedFoodsCard";

const AddedFoods = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AddedFoodsCard />
                <AddedFoodsCard />
                <AddedFoodsCard />
                <AddedFoodsCard />
                <AddedFoodsCard />
            </div>
        </div>
    );
};

export default AddedFoods;