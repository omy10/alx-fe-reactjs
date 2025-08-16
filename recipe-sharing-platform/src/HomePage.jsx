import React, { useState, useEffect } from "react";
import recipesData from "./data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Load recipes when component mounts
  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Our Recipes</h1>

      
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            {/* Image first */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-24 h-24 object-cover"
            />

            {/* Text content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mt-2 text-sm">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
