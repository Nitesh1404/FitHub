import React, { useEffect, useState } from 'react'
import FoodItems from './FoodItems'
import foodData from '../nutritionFood.json';

const FoodList = () => {
	const [foods, setFoods] = useState([]);



	const fetchFoodList = async () => {
		// const promise = await fetch(foodData);
		const data = foodData
		console.log(data);
		setFoods(data.foods);
	}

	useEffect(() => {
		fetchFoodList();
	}, [])

	return (
		<div className='container'>
			<h1 className='text-center my-3'>Food Nutrients</h1>
			<div className=" container row">
				{foods.map((food, index) => {
					const uniqueKey = `${food.image}-${index}`;
					return (
						<div className="col-md-4" key={uniqueKey}>
							<FoodItems title={food.name} image={food.image} calories={food.nutrition.calories} fat={food.nutrition.fat} carbohydrates={food.nutrition.carbohydrates} protein={food.nutrition.protein} fibre={food.nutrition.fiber} />
						</div>
					)
				})}

			</div>

		</div>
	)
}

export default FoodList