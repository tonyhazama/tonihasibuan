import { titles } from "const";
import Link from "next/link";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { useContext, useState } from "react";
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

  const handleScroll = (e) => {
    console.log(e);
    e.preventDefault()
  }

  return (
    <>
      <div className="transition py-4 fixed top-0 left-0 right-0 shadow text-sm bg-white dark:bg-main-dark dark:border-b border-sub-dark dark:text-sub-white print:hidden z-10">
        <Container>
          <div className="flex flex-wrap flex-row align-middle">
            <div className="flex-1 md:w-3/12 md:flex-none">
              <div>
                <div className="font-bold inline-flex">
                  <div className="transition-all truncate text-clip overflow-hidden max-w-header-title dark:max-w-0">MUHAMMAD SUL</div>
                  <div className="transition-all overflow-hidden dark:text-teal-400">TONI&nbsp;</div>
                  <div className="transition-all overflow-hidden text-white dark:text-teal-400">HASIBUAN</div>
                </div>
                <div>Web Developer</div>
              </div>
            </div>
            <div className="flex-1 hidden md:flex md:px-8">
              <div className="w-full flex justify-end flex-col font-semibold font-uppercase md:flex-row items-center">
                <Links onScroll={handleScroll} />
              </div>
            </div>
            <div className="flex items-center border-l-stone-300 border-l-2">
              <ThemeIcon className="text-xl cursor-pointer ml-4 hover:text-teal-400" onClick={onSetTheme} />
              <RiMenuFill className="text-xl cursor-pointer ml-4 md:hidden" onClick={onToggleMenu} />
            </div>

            {/* Mobile Header */}
            <div className={"flex w-full md:hidden overflow-hidden " +(!isHidden ? "h-full" : "h-0")}>
              <div className="w-full flex pt-8 justify-center flex-col font-semibold font-uppercase">
                <Links />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="h-header print:hidden"></div>
    </>
  );
}




const Links = (props) => {
  return (
    <>
      <NavLink href="/#" title="ABOUT" />
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