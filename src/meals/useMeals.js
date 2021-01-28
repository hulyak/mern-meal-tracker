import { useState, useEffect } from 'react';

export const useMeals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rawMeals, setRawMeals] = useState([]);

  useEffect(() => {
    const loadMeals = async () => {
      // send request to server
      const response = await fetch('/meals');
      const rawMeals = await response.json();
      setRawMeals(rawMeals);
      setIsLoading(false);
    };
    loadMeals();
  }, []);

  return {
    isLoading,
    meals: rawMeals.map((rawMeal) => ({
      ...rawMeal,
      plannedDate: new Date(rawMeal.plannedDate), // change the format of the date
    })),
    setMeals: setRawMeals,
  };
};
