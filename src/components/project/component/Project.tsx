import moment from "moment";
import { Dispatch, SetStateAction } from "react";
import "./Project.scss";

interface Props {
  index: number;
  open: Array<boolean>;
  setOpen: Dispatch<SetStateAction<Array<boolean>>>;
  setPrevious: Dispatch<SetStateAction<number>>;
  previous: number;
  project: any;
}

function Project(props: Props) {
  const { open, setOpen, setPrevious, previous, index, project } = props;

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
            <h3
              style={{
                color: open[index]
                  ? "var(--color-tertiary)"
                  : "var(--color-primary)",
              }}
            >
              {project.title}
            </h3>
            <span>
              {moment.unix(project.date.seconds).format("DD MMM YYYY")}
            </span>
          </div>
          <div className="project__icons">
            <a href={project.github}>
              <i className="bi bi-github"></i>
            </a>
            <button>
              {open[index] ? (
                <i
                  className="bi bi-caret-up-fill"
                  style={{ color: "var(--color-tertiary)" }}
                ></i>
              ) : (
                <i className="bi bi-caret-down" onClick={handleOpen}></i>
              )}
            </button>
          </div>
        </div>
        <div className="project__detail">
          <div className="project__whom">
            <h4>{project.subtitle}</h4>
          </div>
          <div className="project__description">
            <p>{project.description}</p>
          </div>
          <div className="project__tags">
            {project.tags.map((tag: string, i: number) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
