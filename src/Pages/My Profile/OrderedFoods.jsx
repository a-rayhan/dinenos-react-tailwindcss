import OrderedFoodsCard from "../../Components/OrderedFoodsCard";

const OrderedFoods = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-24">
            <div className="flex flex-col gap-5">
                <OrderedFoodsCard />
                <OrderedFoodsCard />
                <OrderedFoodsCard />
            </div>
        </div>
    );
};

export default OrderedFoods;