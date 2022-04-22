import "@/styles/index.css";
import { AppContext, AppContextProvider, appReducer, initialAppState } from "@/lib/app-context";

function MyApp({ Component, pageProps }) {

  return (
    <AppContextProvider>
      <div className="transition dark:bg-main-dark  dark:text-sub-white">
        <Component {...pageProps} />
      </div>
    </AppContextProvider>
  );
}

export default MyApp;
