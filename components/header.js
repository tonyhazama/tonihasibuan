import { titles } from "const";
import Link from "next/link";
import { useState } from "react";
import Container from "./container";
import { MenuIcon } from '@heroicons/react/outline';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';


export default function Header() {

  const [isHidden, setHidden] = useState(true);
  const [theme, setTheme] = useState("dark");
  const ThemeIcon = theme === "dark" ? MoonIcon : SunIcon;

  const onToggleMenu = () => {
    setHidden(!isHidden);
  };

  const onSetTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="py-4 fixed top-0 left-0 right-0 shadow text-sm" style={{background: 'white', zIndex: '100'}}>
        <Container>
          <div className="flex flex-wrap flex-row">
            <div className="flex-1 md:w-3/12 md:flex-none">
              <div>
                <div className="font-bold">MUHAMMAD SULTONI.</div>
                <div>Web Developer</div>
              </div>
            </div>
            <div className="flex flex-1 hidden md:block py-[10px] px-16">
              <div className="w-full md:pl-16 flex justify-end flex-col font-semibold font-uppercase md:flex-row">
                <Links />
              </div>
            </div>
            <div className="border-l-stone-300 border-l-2 my-[8px]">
              <div className="flex">
                <ThemeIcon className="h-[24px] cursor-pointer ml-4" onClick={onSetTheme} />
                <MenuIcon className="h-[24px] cursor-pointer ml-4 md:hidden" onClick={onToggleMenu} />
              </div>
            </div>

            {/* Mobile Header */}
            <div className={"flex w-full md:hidden overflow-hidden " +(!isHidden ? "h-full" : "h-0")}>
              <div className="w-full flex pt-[20px] justify-center flex-col font-semibold font-uppercase">
                <Links />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="h-[72px]"></div>
    </>
  );
}




const Links = () => (
  <>
    <Link href="/"><div className="px-16 md:px-8 cursor-pointer pb-2 md:pb-0">HOME</div></Link>
    <Link href="/#works"><div className="px-16 md:px-8 cursor-pointer pb-2 md:pb-0">WORKS</div></Link>
    <Link href="/#contact"><div className="px-16 md:px-8 cursor-pointer pb-2 md:pb-0">CONTACT</div></Link>
    <Link href="/blog"><div className="px-16 md:px-8 cursor-pointer pb-2 md:pb-0">BLOG</div></Link>
  </>
)