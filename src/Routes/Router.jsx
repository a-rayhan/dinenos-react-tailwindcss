import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Pages/MainLayouts";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import FoodDetails from "../Pages/FoodDetails";
import BlogDetails from "../Components/BlogDetails";
import AddedFoods from "../Pages/My Profile/AddedFoods";
import AddNewFood from "../Pages/My Profile/AddNewFood";
import OrderedFoods from "../Pages/My Profile/OrderedFoods";
import UpdateFood from "../Pages/My Profile/UpdateFood";
import Purchase from "../Pages/Purchase";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'allfoods',
                element: <AllFoods />,
                loader: () => fetch('http://127.0.0.1:5000/allFoodItems')
            },
            {
                path: 'fooddetails/:detailsId',
                element: <PrivateRoute><FoodDetails /></PrivateRoute>,
                loader: () => fetch('http://127.0.0.1:5000/allFoodItems')
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'blogdetails',
                element: <BlogDetails />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'addedfoods',
                element: <PrivateRoute><AddedFoods /></PrivateRoute>
            },
            {
                path: 'addnew',
                element: <PrivateRoute><AddNewFood /></PrivateRoute>
            },
            {
                path: 'orderedfoods',
                element: <PrivateRoute><OrderedFoods /></PrivateRoute>
            },
            {
                path: 'updatefood',
                element: <PrivateRoute><UpdateFood /></PrivateRoute>
            },
            {
                path: 'purchase/:purchaseId',
                element: <PrivateRoute><Purchase /></PrivateRoute>,
                loader: () => fetch('http://127.0.0.1:5000/allFoodItems')
            }
        ]
    }
])

export default router;