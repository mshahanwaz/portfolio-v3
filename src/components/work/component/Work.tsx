// import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import "./Work.scss";

interface Props {
  index: number;
  open: Array<boolean>;
  setOpen: Dispatch<SetStateAction<Array<boolean>>>;
  setPrevious: Dispatch<SetStateAction<number>>;
  previous: number;
}

function Work(props: Props) {
  const { open, setOpen, setPrevious, previous, index } = props;

  const handleOpen = () => {
    if (previous !== index) setPrevious(index);
    setOpen(
      open.map((_, i) => {
        return i === index ? !open[i] : false;
      })
    );
  };

  return (
    <div className={`work ${open[index] && "open"}`}>
      <div className="work__wrapper">
        <div
          className="work__head"
          style={{
            borderTop: index === 1 ? "1px solid white" : "none",
            borderBottom: index === 1 ? "1px solid white" : "none",
            borderRight: open[index] ? "none" : "1px solid white",
          }}
        >
          <h3>Title - Very Big And Sophisticated</h3>
          {open[index] ? (
            <i className="bi bi-caret-right-fill"></i>
          ) : (
            <i className="bi bi-caret-right" onClick={handleOpen}></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
