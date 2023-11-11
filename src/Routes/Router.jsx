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
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'allfoods',
                element: <AllFoods />,
                loader: () => fetch('https://dinenos-server-667svyakr-abu-rayhans-projects.vercel.app/allFoodItems')
            },
            {
                path: 'fooddetails/:detailsId',
                element: <PrivateRoute><FoodDetails /></PrivateRoute>,
                loader: () => fetch('https://dinenos-server-667svyakr-abu-rayhans-projects.vercel.app/allFoodItems')
            },
            {
                path: 'blog',
                element: <Blog />,
                loader: () => fetch('https://dinenos-server-667svyakr-abu-rayhans-projects.vercel.app/blog')
            },
            {
                path: 'blogdetails/:blogId',
                element: <BlogDetails />,
                loader: () => fetch('https://dinenos-server-667svyakr-abu-rayhans-projects.vercel.app/blog')
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
                element: <PrivateRoute><AddedFoods /></PrivateRoute>,
                loader: () => fetch('https://dinenos-server-667svyakr-abu-rayhans-projects.vercel.app/allFoodItems')
            },
            {
                path: 'addnew',
                element: <PrivateRoute><AddNewFood /></PrivateRoute>
            },
            {
                path: 'orderedfoods',
                element: <PrivateRoute><OrderedFoods /></PrivateRoute>,
                loader: () => fetch('https://dinenos-server-667svyakr-abu-rayhans-projects.vercel.app/purchasedata')
            },
            {
                path: 'updatefood/:updateId',
                element: <PrivateRoute><UpdateFood /></PrivateRoute>,
                loader: () => fetch('https://dinenos-server-667svyakr-abu-rayhans-projects.vercel.app/allFoodItems')
            },
            {
                path: 'purchase/:purchaseId',
                element: <PrivateRoute><Purchase /></PrivateRoute>,
                loader: () => fetch('https://dinenos-server-667svyakr-abu-rayhans-projects.vercel.app/allFoodItems')
            }
        ]
    }
])

export default router;