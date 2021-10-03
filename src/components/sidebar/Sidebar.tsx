import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./Sidebar.scss";

interface Props {
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  setColor: Dispatch<SetStateAction<string>>;
}

const colors = [
  "#ff0040",
  "#ff9d76",
  "#ff7b47",
  "#ffcb76",
  "#ffac27",
  "#ffee00",
  "#73ff00",
  "#00ffb3",
  "#00fff2",
  "#00b7ff",
  "#2457ff",
  "#ad65ff",
  "#b700ff",
  "#f700ff",
  "#ff009d",
];

function Sidebar({ open, setOpen, setColor }: Props) {
  const [currentColor, setCurrentColor] = useState("");

  const handleColor = (color: string) => {
    setColor(color);
    const root = document.documentElement;
    root.style.setProperty("--color-tertiary", color);
    localStorage.setItem("color", color);
    setCurrentColor(color);
  };

  useEffect(() => {
    const root =
      document.documentElement.style.getPropertyValue("--color-tertiary");
    setCurrentColor(root);
  }, [currentColor]);

  return (
    <section
      className={`sidebar ${
        open === 0 ? "close" : open === 1 ? "show-seek" : "show-hide"
      }`}
    >
      <div className="sidebar__head">
        <p>Themes</p>
        <i className="bi bi-x" onClick={() => setOpen(2)}></i>
      </div>
      <div className="sidebar__colors">
        {colors.map((color: string, i: number) => (
          <span
            style={{
              backgroundColor:
                currentColor === color ? "var(--color-tertiary)" : "",
              border: currentColor === color ? "none" : "",
            }}
            key={i}
            onClick={(_) => handleColor(color)}
            className="sidebar__color"
          >
            <span
              style={{
                backgroundColor: color,
                width: currentColor === color ? "100%" : "80%",
                height: currentColor === color ? "100%" : "80%",
              }}
              title={color}
            ></span>
          </span>
        ))}
      </div>
    </section>
  );
}

export default Sidebar;
