import { useLoaderData } from "react-router-dom";
import Recipe from "../../Pages/Recipe/Recipe";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";


const RecipeLayout = () => {
    const recipes = useLoaderData();
    console.log(recipes);
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <h2 className="text-3xl text-center font-bold pt-4 mb-4">Recipes</h2>
            <div  className="grid grid-cols-3 gap-3 mb-4">
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