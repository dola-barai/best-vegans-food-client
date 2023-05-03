import { Link } from "react-router-dom";


const ChefCard = ({chef}) => {
    console.log(chef);
    const {name, likes, experience_years, num_recipes, picture} = chef;
    return (
        <div>
            <div className="card w-96 shadow-xl bg-purple-200">
            <div className="px-3 pt-3">
              <img src={picture}  className="rounded-xl" />
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <p>Years of experience: {experience_years}</p>
              <p>Numbers of recipes: {num_recipes}</p>
              <p>Likes: {likes}</p>
              <div className="card-actions">
                <Link to='/recipe'><button className="btn btn-primary">View Recipes </button></Link>
              </div>
            </div>
          </div>
        </div>
    );
};

export default ChefCard;