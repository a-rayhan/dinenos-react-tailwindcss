const UpdateFood = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-28" data-aos="fade-up"
            data-aos-duration="1000">

            <div className="p-5 sm:p-10 xl:p-20 bg-[#f4f4f4] rounded">
                <div className="mb-10">
                    <h1 className="text-[#fa8507] text-4xl font-semibold mb-4 text-center">
                        Update Food
                    </h1>
                </div>

                <form>
                    <div className="grid xl:grid-cols-2 gap-x-5">
                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Food Name
                                </label>

                                <input type="text" name="foodname" placeholder="Enter food name" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" required />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Categories
                                </label>

                                <input type="text" name="categories" placeholder="Enter categories" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Made by
                                </label>

                                <input type="text" name="madeby" placeholder="Enter made by" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Food Origin
                                </label>

                                <input type="text" name="origin" placeholder="Enter origin" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Price
                                </label>

                                <input type="text" name="price" placeholder="Enter price" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Total Quantity
                                </label>

                                <input type="number" name="quantity" placeholder="Enter quantity" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full mx-auto mb-3">
                        <div className="flex flex-col">
                            <label className="px-4 mb-1">
                                Food Image
                            </label>

                            <input type="text" name="image" placeholder="Enter image url" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                        </div>
                    </div>

                    <div className="w-full mx-auto mb-3">
                        <div className="flex flex-col">
                            <label className="px-4 mb-1">
                                Description
                            </label>

                            <textarea rows={5} type="text" name="description" placeholder="Enter description" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-7">
                        <button className="text-xl bg-[#fa8507] py-4 w-full rounded-xl text-white font-medium">
                            Update
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateFood;