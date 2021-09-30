import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./Sidebar.scss";

interface Props {
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
}

const colors = [
  "#fdff8b",
  "#df5900",
  "#ff8b8b",
  "#ff8b8b",
  "#ff8b8b",
  "#ff8b8b",
  "#ff8b8b",
  "#d48bff",
  "#ff8bc9",
  "#fdff8b",
  "#df5900",
  "#ff8b8b",
  "#ff8b8b",
  "#ff8b8b",
  "#d48bff",
  "#ff8bc9",
  "#fdff8b",
  "#df5900",
  "#ff8b8b",
  "#ff8b8b",
  "#ff8b8b",
  "#ff8b8b",
  "#ff8b8b",
  "#d48bff",
  "#ff8bc9",
];

function Sidebar({ open, setOpen }: Props) {
  const [currentColor, setCurrentColor] = useState("");

  const handleColor = (color: string) => {
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
