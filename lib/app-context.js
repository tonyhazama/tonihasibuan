import { createContext, useContext, useEffect, useReducer } from "react";

export const initialAppState = {
  theme: 'light',
};

export const SET_THEME = "SET_THEME";

export const appReducer = (state, action) => {
  const {type, payload} = action || {};
  switch (type) {
    case SET_THEME:
      localStorage.setItem('theme', payload.theme)
      return {
        ...state,
        theme: payload.theme,
      };
    default:
      return { ...state };
  }
};

export const AppContext = createContext([]);

export const AppContextProvider = ({children}) => {
  const [store, dispatch] = useReducer(appReducer, initialAppState);

  useEffect(_ => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      dispatch({type: SET_THEME, payload: {theme: storedTheme}})
    }
  }, []);

  return (
    <AppContext.Provider value={[store, dispatch]}>
      <div className={`${store.theme}`}>
        {children}
      </div>
    </AppContext.Provider>
  )
};
