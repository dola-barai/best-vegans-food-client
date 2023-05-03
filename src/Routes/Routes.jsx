import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Home/Register/Register";
import RecipeLayout from "../Layouts/RecipeLayout/RecipeLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
    
        ],
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
        path: '/recipe',
        element: <RecipeLayout></RecipeLayout>,
        loader: () => fetch('http://localhost:3000/recipe')
    }


])

export default router;