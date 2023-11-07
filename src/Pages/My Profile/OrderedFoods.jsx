import { useLoaderData } from "react-router-dom";
import OrderedFoodsCard from "../../Components/OrderedFoodsCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Hooks/AuthProvider";
import { Helmet } from "react-helmet-async";

const OrderedFoods = () => {

    const [purchaseFoods, setPurchaseFoods] = useState([]);

    const purchaseItems = useLoaderData();
    console.log(purchaseItems);

    const { user } = useContext(AuthContext);


    useEffect(() => {
        const purchaseItemsFilter = purchaseItems.filter(purchaseItem => user.email == purchaseItem.buyeremail);
        setPurchaseFoods(purchaseItemsFilter);
    }, [user, purchaseItems]);

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
                    purchaseFoods.map(purchaseItem => <OrderedFoodsCard key={purchaseItem._id} purchaseItem={purchaseItem} />)
                }
            </div>
        </div>
    );
};

export default OrderedFoods;