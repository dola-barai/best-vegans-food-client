const Recipe = ({recipe}) => {
    console.log(recipe);
    const {recipe_name, ingredients, cooking_method} = recipe;
    return (
        <div>
            <div className="card w-96 bg-slate-100 shadow-xl mx-auto">
            <div className="card-body">
              <h2 className="text-2xl font-bold">{recipe_name}</h2>
              <p><span className="font-bold">Ingredients:</span> {ingredients}</p>
              <p><span className="font-bold">Cooking Method:</span> {cooking_method}</p>
            </div>
          </div>
        </div>
    );
};

export default Recipe;