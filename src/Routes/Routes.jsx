import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import RecipeLayout from "../Layouts/RecipeLayout/RecipeLayout";
import 'react-toastify/dist/ReactToastify.css';
import ChefBanner from "../Pages/ChefBanner/ChefBanner";
import ErrorPage from "../Pages/ErrorPage";
import Register from "../Pages/Register/Register";
import BVF from "../BVF/BVF";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <BVF></BVF>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: '/food',
        element: <PrivateRoute><Main></Main></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>
    },

    {
        path: '/blog',
        element: <PrivateRoute><Blog></Blog></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: '/login',
        element: <Login></Login>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: '/register',
        element: <Register></Register>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: 'chefs',
        element: <RecipeLayout></RecipeLayout>,
        loader: () => fetch('https://best-vegans-food-server-dibanishi81-gmailcom.vercel.app/recipe'),
        children: [
            {
                path: ':id',
                element: <ChefBanner></ChefBanner>,
                loader: ({params}) => fetch(`https://best-vegans-food-server-dibanishi81-gmailcom.vercel.app/chefs/${params.id}`),
            },
        ]
    },

])

export default router;