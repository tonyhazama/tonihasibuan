import Contacts from "./contacts";
import Container from "./container";

export default function Footer() {
  return (
    <footer className="dark:text-sub-white print:hidden">
      <Container>
        <div className="pt-12 pb-12 flex justify-between items-center">
          <h3 className="tracking-tighter leading-tight text-sm">
            &copy; 2019 tonihasibuan.com
          </h3>
          <div>
            <Contacts center={true} />
          </div>
        </div>
      </Container>
    </footer>
  );
}
