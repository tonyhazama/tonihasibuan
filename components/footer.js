import Contacts from "./contacts";
import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-sub-dark text-sub-white border-t border-main-dark print:hidden">
      <Container>
        <div className="pt-8 pb-12 flex justify-between items-center">
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
