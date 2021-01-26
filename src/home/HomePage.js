import React from 'react';
import { useMeals } from '../meals';

export const HomePage = () => {
  const { meals, setMeals, isLoading: isLoadingMeals} = useMeals();
  console.log(meals)
  return <h1>home page</h1>;
};
