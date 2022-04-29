import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-main-dark  dark:text-sub-white">
        <Header/>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
