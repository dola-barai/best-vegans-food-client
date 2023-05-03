import  { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";


const ChefSection = () => {
    const [chefs, setChefs] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3000/chefs')
           .then(res => res.json())
           .then(data => setChefs(data))
           .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h2 className="text-3xl text-center font-bold pt-4 mb-4 text-white">Our Best Chefs</h2>
            <div className="grid grid-cols-3 gap-4 pb-4 justify-items-center">
                {
                    chefs.map(chef => <ChefCard
                    key={chef.id}
                    chef={chef}
                    ></ChefCard>)
                }
            </div>
        </div>
    );
};

export default ChefSection;