const Purchase = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-28" data-aos="fade-up"
            data-aos-duration="1000">

            <div className="p-5 sm:p-10 xl:p-20 bg-[#f4f4f4] rounded">
                <div className="mb-10">
                    <h1 className="text-[#fa8507] text-4xl font-semibold mb-4 text-center">
                        Checkout
                    </h1>
                </div>

                <form>
                    <div className="grid gap-x-5">
                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Buyer Name
                                </label>

                                <input type="text" name="buyername" placeholder="Enter buyer name" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" required />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Buyer Email
                                </label>

                                <input type="email" name="buyeremail" placeholder="Enter buyer email" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Buying Date
                                </label>

                                <input type="date" name="buyingdate" placeholder="Enter buying date" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Food Name
                                </label>

                                <input type="text" name="foodname" placeholder="Enter food name" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Price
                                </label>

                                <input type="text" name="foodprice" placeholder="Enter price" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Quantity
                                </label>

                                <input type="number" name="foodquantity" placeholder="Enter quantity" defaultValue={1} className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-7">
                        <button className="text-xl bg-[#fa8507] py-4 w-full rounded-xl text-white font-medium">
                            Purchase now
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Purchase;