import Alert from "./alert";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen dark">
        {/* <Alert preview={preview} /> */}
        
        <Header/>
        
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
