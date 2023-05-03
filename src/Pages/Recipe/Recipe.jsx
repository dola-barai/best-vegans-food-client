import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Recipe = ({recipe}) => {

  const [isFavorite, setIsFavorite] = useState(false);
  function handleFavoriteClick() {
    setIsFavorite(true);
  }

    const {recipe_name, ingredients, cooking_method, picture} = recipe;
    const notify = () => toast("This food is so amazing");
    return (
        <div>
            <div className="card w-96 bg-purple-200 shadow-xl mx-auto">
            <div className="card-body">
            <figure className="px-1 pt-1">
               <img src={picture}  className="rounded-xl" />
             </figure>
              <h2 className="text-2xl font-bold">{recipe_name}</h2>
              <p><span className="font-bold">Ingredients:</span> {ingredients}</p>
              <p><span className="font-bold">Cooking Method:</span> {cooking_method}</p>
              <button className="btn btn-sm  w-1/4 mx-auto"  onClick={handleFavoriteClick} onClickCapture={notify} disabled={isFavorite}>Favorite</button>
              <ToastContainer></ToastContainer>
            </div>
          </div>
        </div>
    );
};

export default Recipe;