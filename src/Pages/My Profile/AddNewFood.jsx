import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Hooks/AuthProvider";
import { Helmet } from "react-helmet-async";

const AddNewFood = () => {
    const { user } = useContext(AuthContext);

    console.log(user);

    const handleAddCar = e => {
        e.preventDefault();
        const form = e.target;

        const foodname = form.foodname.value;
        const categories = form.categories.value;
        const madeby = form.madeby.value;
        const origin = form.origin.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const image = form.image.value;
        const description = form.description.value;
        const email = user?.email;

        console.log(foodname, categories, madeby, origin, quantity, image, description, price, email);

        const newFoodItem = { foodname, categories, madeby, origin, quantity, image, description, price, email };
        console.log(newFoodItem);

        fetch('http://127.0.0.1:5000/allFoodItems', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFoodItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Added succesfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-28" >
            <Helmet>
                <title> Dinenos - Add new foods</title>
            </Helmet>
            <div className="p-5 sm:p-10 xl:p-20 bg-[#f4f4f4] rounded">
                <div className="mb-10">
                    <h1 className="text-[#fa8507] text-4xl font-semibold mb-4 text-center">
                        Add New Food
                    </h1>
                </div>

                <form onSubmit={handleAddCar}>
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

                                <input type="text" name="madeby" placeholder="Enter made by" defaultValue={user?.displayName} className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
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
                            Add
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddNewFood;