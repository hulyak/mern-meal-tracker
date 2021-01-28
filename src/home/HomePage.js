import React from 'react';
import { Link } from 'react-router-dom';
import { IngredientsList, useIngredients } from '../ingredients';
import { MealsList, useMeals } from '../meals';

export const HomePage = () => {
  const { meals, setMeals, isLoading: isLoadingMeals } = useMeals();
  const {
    ingredients,
    isLoading: isLoadingIngredients,
    setIngredients,
  } = useIngredients();
  // console.log(ingredients);
  return (
    <div className="page-container">
      <div className="column">
        <MealsList isLoading={isLoadingMeals} meals={meals} />
      </div>
      <div className="column">
        <IngredientsList isLoading={isLoadingIngredients} ingredients={ingredients} />
        <Link to="/shopping-list">
           <button className="shopping-list-button list-container full-width">
          Generate Shopping List
        </button>
        </Link>
       
      </div>
    </div>
  );
};
