import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Menubar from "../menubar/Menubar";
import Sidebar from "../sidebar/Sidebar";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";

interface Props {
  show: number;
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  setShow: Dispatch<SetStateAction<number>>;
  setColor: Dispatch<SetStateAction<string>>;
}

function Header({ open, show, setOpen, setShow, setColor }: Props) {
  const [showBurger, setShowBurger] = useState(false);

  const handleResize = () => {
    if (window.screen.width < 1000) setShowBurger(true);
    else if (window.scrollY < 200) setShowBurger(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 200) setShowBurger(true);
    else if (window.screen.width > 900) setShowBurger(false);
  };
  const { hash } = useLocation();

  useEffect(() => {
    handleResize();
    handleScroll();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">
          {showBurger ? (
            <span
              className="header__burger"
              onClick={(_) => {
                setShow(1);
                if (open === 1) setOpen(2);
              }}
            >
              <i className="bi bi-list" />
            </span>
          ) : (
            <Link to="/">M. Shahanwaz</Link>
          )}
        </div>
        {!showBurger && (
          <div className="header__links">
            <a className={hash === "#about" ? "give-bg" : ""} href="/#about">
              About
            </a>
            <a
              className={hash === "#projects" ? "give-bg" : ""}
              href="/#projects"
            >
              Projects
            </a>
            <a
              className={hash === "#workexp" ? "give-bg" : ""}
              href="/#workexp"
            >
              Work Exp.
            </a>
            <a className={hash === "#blogs" ? "give-bg" : ""} href="/#blogs">
              Blogs
            </a>
            <a className={hash === "#findme" ? "give-bg" : ""} href="/#findme">
              Find Me
            </a>
          </div>
        )}
        <div className="header__toggle">
          <span
            className="toggle"
            onClick={() => {
              setOpen(1);
              if (show === 1) setShow(2);
            }}
          >
            <i className="bi bi-paint-bucket"></i>
          </span>
        </div>
      </nav>
      <Sidebar open={open} setColor={setColor} setOpen={setOpen} />
      <Menubar show={show} setShow={setShow} />
    </header>
  );
}

export default Header;
