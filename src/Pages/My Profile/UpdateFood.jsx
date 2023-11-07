import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Hooks/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateFood = () => {

    const { user } = useContext(AuthContext);

    const [foodItem, setFoodItem] = useState([]);

    const foodsItems = useLoaderData();

    const { updateId } = useParams();

    useEffect(() => {
        const findFoodId = foodsItems.find(foodItem => foodItem._id == updateId);
        setFoodItem(findFoodId);
    }, [updateId, foodsItems]);

    const handleUpdateFood = e => {
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

        const updateFoodItem = { foodname, categories, madeby, origin, quantity, image, description, price, email };
        console.log(updateFoodItem);

        fetch(`http://127.0.0.1:5000/allFoodItems/${foodItem._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateFoodItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Updated succesfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-28" data-aos="fade-up"
        data-aos-duration="1000">
            <Helmet>
                <title> Dinenos - Update food</title>
            </Helmet>
            <div className="p-5 sm:p-10 xl:p-20 bg-[#f4f4f4] rounded">
                <div className="mb-10">
                    <h1 className="text-[#fa8507] text-4xl font-semibold mb-4 text-center">
                        Update Food
                    </h1>
                </div>

                <form onSubmit={handleUpdateFood}>
                    <div className="grid xl:grid-cols-2 gap-x-5">
                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Food Name
                                </label>

                                <input type="text" name="foodname" defaultValue={foodItem.foodname} placeholder="Enter food name" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" required />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Categories
                                </label>

                                <input type="text" name="categories" defaultValue={foodItem.categories} placeholder="Enter categories" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Made by
                                </label>

                                <input type="text" name="madeby" defaultValue={foodItem.madeby} placeholder="Enter made by" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Food Origin
                                </label>

                                <input type="text" name="origin" defaultValue={foodItem.origin} placeholder="Enter origin" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Price
                                </label>

                                <input type="text" name="price" defaultValue={foodItem.price} placeholder="Enter price" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Total Quantity
                                </label>

                                <input type="number" name="quantity" defaultValue={foodItem.quantity} placeholder="Enter quantity" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full mx-auto mb-3">
                        <div className="flex flex-col">
                            <label className="px-4 mb-1">
                                Food Image
                            </label>

                            <input type="text" name="image" defaultValue={foodItem.image} placeholder="Enter image url" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                        </div>
                    </div>

                    <div className="w-full mx-auto mb-3">
                        <div className="flex flex-col">
                            <label className="px-4 mb-1">
                                Description
                            </label>

                            <textarea rows={5} type="text" name="description" defaultValue={foodItem.description} placeholder="Enter description" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
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