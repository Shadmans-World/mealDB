import { useLoaderData } from "react-router-dom";

const FilterCategories = () => {
  const data = useLoaderData();
  const filterData = data.meals || [];
  console.log(filterData)
  return (
    <div>
      <h1 className='flex justify-center my-6 text-3xl font-bold'>Items: {filterData.length}</h1>
      <div className="grid grid-cols-3 gap-3 flex-grow">
        {filterData.map((meal) => (
          <div key={meal.idMeal} className="flex flex-col  items-center flex-grow border-2 border-black rounded-xl px-3 py-3 gap-y-5">
            <h3 className="text-2xl font-bold">{meal.strMeal}</h3>
            <img className="w-56 object-cover rounded-xl" src={meal.strMealThumb} alt={meal.strMealThumb} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCategories;
