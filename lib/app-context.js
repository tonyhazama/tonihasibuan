import { createContext, useContext, useReducer } from "react";

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
  const [store, dispatch] = useReducer(appReducer, initialAppState);

  return (
    <AppContext.Provider value={[store, dispatch]}>
      <div className={`${store.theme}`}>
        {children}
      </div>
    </AppContext.Provider>
  )
};
