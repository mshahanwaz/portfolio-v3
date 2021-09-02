import { useEffect, useState } from "react";
import "./Sidebar.scss";

interface Props {
  open: number;
  handleChange: any;
}

const colors = [
  "#8b8bff",
  "#8beeff",
  "#8bffb2",
  "#fdff8b",
  "#ffb98b",
  "#ff8b8b",
  "#d48bff",
  "#ff8bc9",
];

const Sidebar: React.FC<Props> = (props: Props) => {
  const { open, handleChange } = props;
  const [currentColor, setCurrentColor] = useState<string>("");

  const handleColor = (color: string) => {
    const root = document.documentElement;
    root.style.setProperty("--color-tertiary", color);
    handleChange();
  };

  useEffect(() => {
    const root =
      document.documentElement.style.getPropertyValue("--color-tertiary");
    if (root) setCurrentColor(root);
  }, []);

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
            onClick={(fake) => handleColor(color)}
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
