import React from 'react';
import { MealsList, useMeals } from '../meals';

export const HomePage = () => {
  const { meals, setMeals, isLoading: isLoadingMeals } = useMeals();
  console.log(meals);
  return (
    <div className="page-container">
      <div className="column">
        <MealsList isLoading={isLoadingMeals} meals={meals} />
      </div>
    </div>
  );
};
