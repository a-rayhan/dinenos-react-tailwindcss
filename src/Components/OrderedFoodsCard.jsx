const OrderedFoodsCard = () => {
    return (
        <div>
            <div className="flex gap-8 bg-[#ebe8fc] p-5 rounded">
                <div className="w-28 h-32 bg-slate-200 rounded">
                    <img src='https://images.unsplash.com/photo-1635685296916-95acaf58471f?auto=format&fit=crop&q=80&w=1888&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full rounded-2xl object-cover' className="w-full h-full object-cover rounded" alt="" />
                </div>

                <div className="md:flex md:justify-between flex-1 md:py-2">
                    <div className="mb-3">
                        <p className="text-lg font-medium">
                            Ramen Noodles
                        </p>

                        <p className="text-2xl text-[#fa8507]">
                            $14.45
                        </p>
                    </div>

                    <div>
                        <button className="py-2 px-4 text-[#fa8507] border border-[#fa8507] cursor-pointer rounded font-medium">
                            Remove
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OrderedFoodsCard;