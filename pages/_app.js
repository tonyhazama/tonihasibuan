import { useContext, useReducer } from "react";
import "@/styles/index.css";
import { AppContext, appReducer, initialAppState } from "@/lib/app-context";

function MyApp({ Component, pageProps }) {
  const [store, dispatch] = useReducer(appReducer, initialAppState);

  return (
    <AppContext.Provider value={[store, dispatch]}>
      <div className={`${store.theme}`}>
        <div className="dark:bg-main-dark  dark:text-sub-white">
          <Component {...pageProps} />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default MyApp;
