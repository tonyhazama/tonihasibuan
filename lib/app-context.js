import { createContext } from 'react';

export const initialAppState = {
  theme: 'dark',
};

export const SET_THEME = "SET_THEME";

export const appReducer = (state, action) => {
  console.log({
    ...state,
    ...action.payload,
  })
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
};

export const AppContext = createContext([]);

export const AppContextProvider = ({children}) => {

  return (
    <Context.Provider>
      {children}
    </Context.Provider>
  )
};
