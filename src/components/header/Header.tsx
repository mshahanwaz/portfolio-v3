import { Dispatch, SetStateAction } from "react";
import Sidebar from "../sidebar/Sidebar";
import "./Header.scss";

interface Props {
  open: number;
  handleChange: any;
  setColor: Dispatch<SetStateAction<string>>;
}

function Header({ open, handleChange, setColor }: Props) {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">
          <span className="header__burger"></span>
          <a href="/#">M. Shahanwaz</a>
        </div>
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
        <div className="header__toggle">
          <input
            type="checkbox"
            onClick={handleChange}
            name="toggler"
            id="toggler"
          />
          <label htmlFor="toggler"></label>
        </div>
      </nav>
      <Sidebar open={open} handleChange={handleChange} setColor={setColor} />
    </header>
  );
}

export default Header;
