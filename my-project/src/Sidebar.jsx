const Sidebar = ({ recipeQueue, handleRemove, prepareRecipe, calculateTimeAndCalories, totalTime, totalCalories }) => {
    return (
      <div className='md:w-1/3 border-2 rounded-2xl p-2 bg-base-100'>
        <div className="overflow-x-auto">
          <h2 className='border-b-4 p-4 mx-auto text-center font-semibold text-2xl'>Want to Cook: {recipeQueue.length}</h2>
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {recipeQueue.map((card, index) => (
                <tr className='hover' key={index}>
                  <th>{index + 1}</th>
                  <td>{card.recipe_name}</td>
                  <td>{card.preparing_time}</td>
                  <td>{card.calories}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleRemove(card.recipe_id);
                        calculateTimeAndCalories(card.preparing_time, card.calories);
                      }}
                      className="bg-green-400 rounded-full px-2 py-1 md:px-4 py-2 my-2 text-xl text-gray-800 font-medium"
                      aria-label={`Prepare ${card.recipe_name}`}
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto">
          <h2 className='border-b-4 p-4 mx-auto text-center font-semibold text-2xl'>Currently Cooking: {prepareRecipe.length}</h2>
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {prepareRecipe.map((card, index) => (
                <tr className='hover' key={index}>
                  <th>{index + 1}</th>
                  <td>{card.recipe_name}</td>
                  <td>{card.preparing_time}</td>
                  <td>{card.calories}</td>
                </tr>
              ))}
              <tr className='border-none'>
                <th></th>
                <td></td>
                <td>Total Time = {totalTime}</td> {/* Ensure only the number is displayed */}
                <td>Total Calories = {totalCalories}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  