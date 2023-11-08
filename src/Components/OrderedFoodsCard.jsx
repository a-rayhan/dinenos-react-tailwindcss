const OrderedFoodsCard = ({ purchaseItem, handleDeleteItem }) => {

    const { _id, buyingdate, foodname, image, foodprice, foodquantity } = purchaseItem;

    return (
        <div>
            <div className="flex gap-8 bg-[#ebe8fc] p-5 rounded">
                <div className="w-28 h-32 bg-slate-200 rounded">
                    <img src={image} className="w-full h-full object-cover rounded" alt="" />
                </div>

                <div className="md:flex md:justify-between flex-1 md:py-2">
                    <div className="mb-3">
                        <p className="text-lg font-medium">
                            {foodname}
                        </p>

                        <p className="text-2xl text-[#fa8507]">
                            ${foodprice}.00
                        </p>

                        <p className="text-lg">
                            {buyingdate}
                        </p>

                        <p className="text-lg">
                            Quantity: {foodquantity} items
                        </p>
                    </div>

                    <div>
                        <button onClick={() => handleDeleteItem(_id)} className="py-2 px-4 text-[#fa8507] border border-[#fa8507] cursor-pointer rounded font-medium">
                            Remove
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OrderedFoodsCard;