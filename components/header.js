import { titles } from "const";
import Link from "next/link";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { useContext, useEffect, useState } from "react";
import Container from "./container";
import { AppContext, SET_THEME } from "@/lib/app-context";
import { RiMenuFill, RiSunFill, RiMoonFill }from 'react-icons/ri';


export default function Header() {

  const [isHidden, setHidden] = useState(true);
  const [store, dispatch] = useContext(AppContext);
  const ThemeIcon = store.theme === "dark" ? RiMoonFill : RiSunFill;

  const onToggleMenu = () => {
    setHidden(!isHidden);
  };

  const onSetTheme = () => {
    dispatch({
      type: SET_THEME,
      payload: {
        theme: store.theme === "dark" ? "light" : "dark"
      }
    });
  };

  const handleClick = (e) => {
    console.log("click")
    setHidden(false);
  }

  return (
    <>
      <div className="transition fixed top-0 left-0 right-0 shadow text-sm bg-white dark:bg-main-dark dark:border-b border-sub-dark dark:text-sub-white print:hidden z-10">
        <Container>
          <div className="flex flex-wrap flex-row align-middle py-4 ">
            <div className="flex-1 md:w-3/12 md:flex-none">
              <div>
                <div className="font-bold inline-flex">
                  <div className="transition-all duration-500 truncate text-clip overflow-hidden max-w-header-title dark:max-w-0">MUHAMMAD SUL</div>
                  <div className="transition-all duration-500 overflow-hidden dark:text-teal-400">TONI&nbsp;</div>
                  <div className="transition-all duration-500 overflow-hidden text-teal-400 max-w-0 dark:max-w-header-title">HASIBUAN</div>
                </div>
                <div>Web Developer</div>
              </div>
            </div>
            <div className="flex-1 hidden md:flex md:px-8">
              <div className="w-full flex justify-end flex-col font-semibold font-uppercase md:flex-row items-center">
                <Links />
              </div>
            </div>
            <div className="flex items-center border-l-stone-300 border-l-2">
              <ThemeIcon className="text-xl cursor-pointer ml-4 hover:text-teal-400" onClick={onSetTheme} />
              <RiMenuFill className="text-xl cursor-pointer ml-4 md:hidden" onClick={onToggleMenu} />
            </div>
          </div>
          <div className={"flex w-full md:hidden overflow-hidden transition-all duration-500 " +(!isHidden ? "max-h-40" : "max-h-0")}>
            <div className="w-full flex py-4 justify-center flex-col font-semibold font-uppercase">
              <Links />
            </div>
          </div>
        </Container>
      </div>
      <div className="h-header print:hidden"></div>
    </>
  );
}




const Links = ({onClickLink}) => {
  return (
    <>
      <NavLink o href="/#" title="ABOUT" />
      <NavLink href="/#works" title="WORKS" />
      <NavLink href="/blog" title="BLOG" />
    </>
  )
}

const NavLink = ({href, title, active}) => {
  return (
    <Link href={href}>
      <div className="px-0 md:px-8 cursor-pointer py-2 md:py-0 relative flex">
        {title}
        {active && <div className="absolute -ml-4 h-2 w-2 bg-teal-400 rounded-full" ></div>}
      </div>
    </Link>
  );
}