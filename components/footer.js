import Contacts from "./contacts";
import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-sub-dark text-sub-white border-t border-main-dark">
      <Container>
        <div className="pt-8 pb-12">
          <h3 className="text-center tracking-tighter leading-tight text-sm mb-4">
            &copy; 2019 Muhammad Sultoni
          </h3>
          <div>
            <Contacts center={true} />
          </div>
        </div>
      </Container>
    </footer>
  );
}
