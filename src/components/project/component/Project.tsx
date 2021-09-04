// import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import "./Project.scss";

interface Props {
  index: number;
  open: Array<boolean>;
  setOpen: Dispatch<SetStateAction<Array<boolean>>>;
  setPrevious: Dispatch<SetStateAction<number>>;
  previous: number;
}

function Project(props: Props) {
  const { open, setOpen, setPrevious, previous, index } = props;

  // useEffect(() => {}, [open, index]);

  const handleOpen = () => {
    if (previous !== index) setPrevious(index);
    setOpen(
      open.map((_, i) => {
        return i === index ? !open[i] : false;
      })
    );
  };

  return (
    <div className={`project ${open[index] && "open"}`}>
      <div className="project__wrapper">
        <div className="project__head">
          <div className="project__title">
            <h3>Title - Very Big And Sophisticated</h3>
            <span>22 Sept, 2021</span>
          </div>
          <div className="project__icons">
            <a href="/#op">
              <i className="bi bi-github"></i>
            </a>
            <button>
              {open[index] ? (
                <i className="bi bi-caret-up-fill"></i>
              ) : (
                <i className="bi bi-caret-down" onClick={handleOpen}></i>
              )}
            </button>
          </div>
        </div>
        <div className="project__detail">
          <div className="project__whom">
            <h4>P2L Impact Company Pvt. Ltd.</h4>
          </div>
          <div className="project__description">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates, nostrum est neque ratione magnam quod animi
              consectetur tempora ut quisquam?
            </p>
          </div>
          <div className="project__tags">
            <span>ReactJS</span>
            <span>Firebase</span>
            <span>Fake Store API</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
