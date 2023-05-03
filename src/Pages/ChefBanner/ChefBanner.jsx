import { useLoaderData } from "react-router-dom";

const ChefBanner = () => {
   const chefData = useLoaderData();

   const {name, likes, experience_years, num_recipes, picture} = chefData;
    return (
        <div>
            <h2 className="text-3xl text-center font-bold pt-4 mb-4 text-white">Chef Details</h2>
            <div className="mx-auto my-4 w-2/3 bg-purple-200 rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
              <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">{name}</h1>
                <p className="py-6">Chef {name} is a culinary prodigy whose passion has taken him around the world. Experienced in French, Italian, and Asian cuisine, he has earned repute in the kitchen as well as recognition among the food critics.</p>
                <p>Years of experience: {experience_years}</p>
                <p>Numbers of recipes: {num_recipes}</p>
                <p>Likes: {likes}</p>
              </div>
            </div>
          </div>
        </div>
    );
};

export default ChefBanner;