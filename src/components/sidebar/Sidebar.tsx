import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./Sidebar.scss";

interface Props {
  open: number;
  handleChange: any;
  setColor: Dispatch<SetStateAction<string>>;
}

const colors = ["#fdff8b", "#df5900", "#ff8b8b", "#d48bff", "#ff8bc9"];

function Sidebar({ open, handleChange, setColor }: Props) {
  const [currentColor, setCurrentColor] = useState<string>("");

  const handleColor = (color: string) => {
    const root = document.documentElement;
    root.style.setProperty("--color-tertiary", color);
    setColor(color);
    handleChange();
  };

  useEffect(() => {
    const root =
      document.documentElement.style.getPropertyValue("--color-tertiary");
    if (root) {
      setCurrentColor(root);
      setColor(root);
    }
  }, [setColor]);

  console.log(currentColor);
  return (
    <section
      className={`sidebar ${
        open === 0 ? "close" : open === 1 ? "show-seek" : "show-hide"
      }`}
    >
      <div className="sidebar__head">
        <p>Themes</p>
        <i className="bi bi-x" onClick={handleChange}></i>
      </div>
      <div className="sidebar__colors">
        {colors.map((color: string, i: number) => (
          <span
            key={i}
            onClick={(_) => handleColor(color)}
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Sidebar;
