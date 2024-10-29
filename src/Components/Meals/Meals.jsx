import  { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';



const Meals = () => {
    const data = useLoaderData(); // Get data directly from the loader
    const meals = data.categories || []; // Access categories safely
    console.log(meals)

    const [showMore, setShowMore] = useState(false);

    // Function to toggle visibility
    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
    return (
        <div>
            <h1 className='flex justify-center my-6 text-3xl font-bold'>Meals Category: {meals.length}</h1>
            
            <div className='grid grid-cols-3 gap-3 '>
                {meals.map((meal, idx) => (
                    <div key={idx} className='flex flex-col items-center flex-grow border-2 border-black rounded-xl px-3 py-3 gap-y-5'>
                        <h3 className='text-2xl font-bold'>{meal.strCategory}</h3>
                        <img className='w-56 rounded-xl' src={meal.strCategoryThumb} alt={meal.strCategory} />
                        {/* Wrapping description in a flex-grow div */}
            <div className="flex-grow">
                <p className="text-gray-500">
                    {showMore ? meal.strCategoryDescription : meal.strCategoryDescription.substring(0, 100) + '...'}
                    <button className="text-black" onClick={toggleShowMore}>
                        {showMore ? 'See Less' : 'See More'}
                    </button>
                </p>
            </div>
                        <NavLink to={`/meals/${meal.strCategory}`}><button className='btn'>Check This Category</button></NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Meals;

// PropTypes are not needed here as no props are being passed to Meals
