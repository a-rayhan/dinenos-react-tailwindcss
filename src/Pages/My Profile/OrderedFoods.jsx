import { useLoaderData } from "react-router-dom";
import OrderedFoodsCard from "../../Components/OrderedFoodsCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Hooks/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const OrderedFoods = () => {

    const [purchaseFoods, setPurchaseFoods] = useState([]);

    const [updatepurchaseFoods, setUpdatepurchaseFoods] = useState()

    const purchaseItems = useLoaderData();
    console.log(purchaseItems);

    const { user } = useContext(AuthContext);


    useEffect(() => {
        const purchaseItemsFilter = purchaseItems.filter(purchaseItem => user.email == purchaseItem.buyeremail);
        setPurchaseFoods(purchaseItemsFilter);
    }, [user, purchaseItems]);

    const handleDeleteItem = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://127.0.0.1:5000/purchasedata/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remainingItems = purchaseItems.filter(purchaseItem => purchaseItem._id !== id);
                            setUpdatepurchaseFoods(remainingItems)
                        }
                    })
            }
        })
    }

    return (
        <div
            className="max-w-7xl mx-auto px-5 py-24"
            data-aos="fade-up"
            data-aos-duration="1000">
            <Helmet>
                <title> Dinenos - Ordered items</title>
            </Helmet>
            <div className="flex flex-col gap-5">
                {
                    purchaseFoods.map(purchaseItem => <OrderedFoodsCard key={purchaseItem._id} purchaseItem={purchaseItem} handleDeleteItem={handleDeleteItem} />)
                }
            </div>
        </div>
    );
};

export default OrderedFoods;