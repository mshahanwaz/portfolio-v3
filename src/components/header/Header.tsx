import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Menubar from "../menubar/Menubar";
import Sidebar from "../sidebar/Sidebar";
import "./Header.scss";

interface Props {
  show: number;
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  setShow: Dispatch<SetStateAction<number>>;
  setColor: Dispatch<SetStateAction<string>>;
}

function Header({ open, show, setOpen, setColor, setShow }: Props) {
  const [showBurger, setShowBurger] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 200) setShowBurger(true);
      else setShowBurger(false);
    });
  }, []);

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">
          {showBurger ? (
            <div
              className="header__burger"
              onClick={(_) => {
                setShow(1);
                if (open === 1) setOpen(2);
              }}
            >
              <i className="bi bi-list-nested" />
            </div>
          ) : (
            <a href="/#">M. Shahanwaz</a>
          )}
        </div>
        {!showBurger && (
          <div className="header__links">
            <div className="header__link">
              <a href="/#about">About</a>
            </div>
            <div className="header__link">
              <a href="/#projects">Projects</a>
            </div>
            <div className="header__link">
              <a href="/#workexp">Work Exp.</a>
            </div>
            <div className="header__link">
              <a href="/#blogs">Blogs</a>
            </div>
            <div className="header__link">
              <a href="/#findme">Find Me</a>
            </div>
          </div>
        )}
        <div className="header__toggle">
          <input
            type="checkbox"
            onClick={() => {
              setOpen(1);
              if (show === 1) setShow(2);
            }}
            name="toggler"
            id="toggler"
          />
          <label htmlFor="toggler"></label>
        </div>
      </nav>
      <Sidebar open={open} setOpen={setOpen} setColor={setColor} />
      <Menubar show={show} setShow={setShow} />
    </header>
  );
}

export default Header;
