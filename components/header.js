import { titles } from "const";
import Link from "next/link";
import Container from "./container";

export default function Header() {
  return (
    <>
      <div className="py-5 fixed top-0 left-0 right-0 shadow-sm" style={{background: 'white', zIndex: '100'}}>
        <Container>
          <h2 className="text-xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight">
            <Link href="/">
              <a className="hover:underline">{titles.siteName}.</a>
            </Link>
          </h2>
          <span className="text-sm">{titles.siteDescription}</span>
        </Container>
      </div>
      <div className="h-24 mb-8 md:h-32"></div>
    </>
  );
}
