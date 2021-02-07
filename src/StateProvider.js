import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, childeren }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {childeren}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
