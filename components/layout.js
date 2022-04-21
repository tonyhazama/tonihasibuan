import Alert from "./alert";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen dark:bg-main-dark  dark:text-sub-white">
        <Header/>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
