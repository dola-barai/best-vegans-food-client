import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Home/Register/Register";
import RecipeLayout from "../Layouts/RecipeLayout/RecipeLayout";
import 'react-toastify/dist/ReactToastify.css';
import ChefBanner from "../Pages/ChefBanner/ChefBanner";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>
    },

    {
        path: '/blog',
        element: <Blog></Blog>
    },
    {
        path: '/login',
        element: <Login></Login>,
       
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: 'chefs',
        element: <RecipeLayout></RecipeLayout>,
        loader: () => fetch('http://localhost:3000/recipe'),
        children: [
            {
                path: ':id',
                element: <ChefBanner></ChefBanner>,
                loader: ({params}) => fetch(`http://localhost:3000/chefs/${params.id}`),
            },
        ]
    },

])

export default router;