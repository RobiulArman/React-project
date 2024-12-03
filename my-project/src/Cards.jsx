import React, { useEffect, useState } from 'react';

const Cards = ({ addRecipeToQueue }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('./fake.json')
            .then(res => res.json())
            .then(data => setCards(data))
            // .catch(err => console.error("Error fetching data:", err));
    }, []);
    
    // console.log(cards)
    return (
        <div className="md:w-2/3">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {cards.map(card => {
                    return (
                        <div key={card.recipe_id} className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                {/* card.recipe_image */}
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{card.recipe_name}</h2>
                                <p>{card.short_description}</p>
                                <h3>Ingredients: {card.ingredients.length}</h3>
                                <ul className='ml-8'>
                                    {card.ingredients.map((item, index) => (
                                        <li className='list-disc' key={index}>{item}</li>
                                    ))}
                                </ul>
                                <div className='flex gap-4'>
                                    <div className='flex items-center'>
                                        <i className="fa-regular fa-clock mr-2 text-xl"></i>
                                        <p>{card.preparing_time} </p>
                                    </div>
                                    <div className='flex items-center'>
                                        <i className="fa-solid fa-fire-flame-curved mr-2 text-xl"></i>
                                        <p>{card.calories} Calories </p>
                                    </div>
                                </div>
                                <div className="card-actions">
                                    <button 
                                        onClick={() => addRecipeToQueue(card)} 
                                        className="btn bg-green-400 rounded-full px-8 text-xl text-gray-800 mt-6 font-medium"
                                    >
                                        Want to Cook
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Cards;
