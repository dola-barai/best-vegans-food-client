import { Outlet, useLoaderData } from "react-router-dom";
import Recipe from "../../Pages/Recipe/Recipe"
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const RecipeLayout = () => {
    const recipes = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div>
            <h2 className="text-3xl text-center font-bold pt-4 mb-4 text-white">Recipes</h2>
            <div  className="grid md:grid-cols-3 sm:grid-cols-1 gap-3 mb-4">
            {
                recipes.map(recipe => <Recipe
                key={recipe.id}
                recipe={recipe}
                ></Recipe>)
            }
        </div>

            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default RecipeLayout;