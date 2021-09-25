import { Dispatch, SetStateAction } from "react";
import "./Menubar.scss";
import { Link } from "react-router-dom";

interface Props {
  show: number;
  setShow: Dispatch<SetStateAction<number>>;
}

function Menubar({ show, setShow }: Props) {
  return (
    <section
      className={`menubar ${
        show === 0
          ? "close-menu"
          : show === 1
          ? "show-seek-menu"
          : "show-hide-menu"
      }`}
    >
      <div className="menubar__head">
        <i className="bi bi-x" onClick={() => setShow(2)}></i>
        <p>Menu</p>
      </div>
      <div className="menubar__options">
        <div className="menubar__link">
          <a href="/#">Home</a>
        </div>
        <div className="menubar__link">
          <a href="/#about">About</a>
        </div>
        <div className="menubar__link">
          <a href="/#projects">Projects</a>
        </div>
        <div className="menubar__link">
          <a href="/#workexp">Work Exp.</a>
        </div>
        <div className="menubar__link">
          <a href="/#blogs">Blogs</a>
        </div>
        <div className="menubar__link">
          <a href="/#findme">Find Me</a>
        </div>
      </div>
    </section>
  );
}

export default Menubar;
