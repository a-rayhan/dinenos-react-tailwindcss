import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Hooks/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Purchase = () => {

    const { user } = useContext(AuthContext);

    const [foodItem, setFoodItem] = useState([]);

    const foodsItem = useLoaderData();

    const { purchaseId } = useParams();

    useEffect(() => {
        const findFoodId = foodsItem.find(foodItem => foodItem._id == purchaseId);
        setFoodItem(findFoodId);
    }, [purchaseId, foodsItem]);


    const handlePuchaseItem = e => {
        e.preventDefault();
        const form = e.target;

        const buyername = form.buyername.value;
        const buyeremail = form.buyeremail.value;
        const buyingdate = form.buyingdate.value;
        const foodname = form.foodname.value;
        const image = form.image.value;
        const foodprice = form.foodprice.value;
        const foodquantity = form.foodquantity.value;

        console.log(buyername, buyeremail, buyingdate, foodname, image, foodprice, foodquantity);

        const purchaseFoodItem = { buyername, buyeremail, buyingdate, foodname, image, foodprice, foodquantity };
        console.log(purchaseFoodItem);

        fetch('http://127.0.0.1:5000/purchasedata', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchaseFoodItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Purchase succesfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                }
            })
    }


    return (
        <div className="max-w-7xl mx-auto px-6 py-28">
            <Helmet>
                <title> Dinenos - Purchase</title>
            </Helmet>
            <div className="p-5 sm:p-10 xl:p-20 bg-[#f4f4f4] rounded">
                <div className="mb-10">
                    <h1 className="text-[#fa8507] text-4xl font-semibold mb-4 text-center">
                        Checkout
                    </h1>
                </div>

                <form onSubmit={handlePuchaseItem}>
                    <div className="grid gap-x-5">
                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Buyer Name
                                </label>

                                <input type="text" name="buyername" defaultValue={user?.displayName} placeholder="Enter buyer name" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" required />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="px-4 mb-1">
                                    Buyer Email
                                </label>

                                <input type="email" name="buyeremail" defaultValue={user?.email} placeholder="Enter buyer email" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
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

                                <input type="text" name="foodname" defaultValue={foodItem.foodname} placeholder="Enter food name" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
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
                                    Price
                                </label>

                                <input type="text" name="foodprice" defaultValue={foodItem.price} placeholder="Enter price" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
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