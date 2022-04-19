import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-sub-dark text-sub-white border-t border-main-dark">
      <Container>
        <div className="py-4 flex justify-center">
          <h3 className="tracking-tighter leading-tight text-sm">
            &copy; 2019 Muhammad Sultoni
          </h3>
        </div>
      </Container>
    </footer>
  );
}
