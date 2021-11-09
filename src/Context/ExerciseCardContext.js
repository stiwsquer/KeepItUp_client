import React, { useState, useContext, createContext } from 'react';

export const ExerciseCardContext = createContext();

export const useExerciseCardContext = () => useContext(ExerciseCardContext);

export const ExerciseContextProvider = ({ children }) => {
  const [bigCard, setBigCard] = useState(true);
  const [exercise, setExercise] = useState({});

  return (
    <ExerciseCardContext.Provider
      value={[bigCard, setBigCard, exercise, setExercise]}
    >
      {children}
    </ExerciseCardContext.Provider>
  );
};
