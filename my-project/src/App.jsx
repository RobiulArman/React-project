import React, { useState } from 'react';
import Header from './Header';  // Import Header component
import Banner from './Banner';
import Rece from './Rece';
import Cards from './Cards';
import Sidebar from './Sidebar';

const App = () => {
  const [recipeQueue, setReceipeQueue] = useState([]);
  const [prepareRecipe, setprepareRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0); // Ensure this is a number
  const [totalCalories, setTotalCalories] = useState(0);

  const addRecipeToQueue = (card) => {
    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === card.recipe_id);

    if (!isExist) {
      setReceipeQueue([...recipeQueue, card]);
    } else {
      alert("Recipe Already Exists in the Queue");
    }
  };

  const handleRemove = (id) => {
    const deletedRecipe = recipeQueue.find(card => card.recipe_id === id);
    const updatedQueue = recipeQueue.filter(card => card.recipe_id !== id);
    setReceipeQueue(updatedQueue);
    setprepareRecipe([...prepareRecipe, deletedRecipe]);
  };

  const calculateTimeAndCalories = (time, calories) => {
    
    setTotalTime(prevTime => prevTime + time);
    setTotalCalories(prevCalories => prevCalories + calories);
    // console.log("Time:", time, "Type:", typeof time); // Check if it's a string or number

  };

  return (
    <div className='container mx-auto px-4'>
      <Header />
      <Banner />
      <Rece />
      <section className='flex flex-col md:flex-row gap-6'>
        <Cards addRecipeToQueue={addRecipeToQueue} />
        <Sidebar
          handleRemove={handleRemove}
          prepareRecipe={prepareRecipe}
          recipeQueue={recipeQueue}
          calculateTimeAndCalories={calculateTimeAndCalories}
          totalTime={totalTime} // Pass just the number
          totalCalories={totalCalories}
        />
      </section>
    </div>
  );
};

export default App;
