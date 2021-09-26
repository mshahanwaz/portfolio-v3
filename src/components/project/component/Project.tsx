import moment from "moment";
import { Dispatch, SetStateAction } from "react";
import "./Project.scss";

interface Props {
  index: number;
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  project: any;
}

function Project(props: Props) {
  const { open, setOpen, index, project } = props;

  const handleOpen = () => {
    setOpen(index);
  };

  return (
    <div className={`project ${open === index && "open"}`}>
      <div className="project__wrapper">
        <div
          className="project__head"
          onClick={() => handleOpen()}
          style={
            open === index
              ? {
                  backgroundColor: "var(--color-tertiary)",
                }
              : {}
          }
        >
          <div className="project__title">
            <h3
              style={{
                color:
                  open === index
                    ? "var(--color-secondary)"
                    : "var(--color-tertiary)",
              }}
            >
              {project.title}
            </h3>
            <span
              style={{
                color:
                  open === index
                    ? "var(--color-secondary)"
                    : "var(--color-lightgrey)",
              }}
            >
              {moment.unix(project.date.seconds).format("DD MMM, YYYY")}
            </span>
          </div>
          <div className="project__icons">
            <a
              href={project.github}
              style={{
                color:
                  open === index
                    ? "var(--color-secondary)"
                    : "var(--color-primary)",
              }}
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href={project?.link}
              style={{
                color:
                  open === index
                    ? "var(--color-secondary)"
                    : "var(--color-primary)",
              }}
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="bi bi-arrow-up-right-square"></i>
            </a>
            <button
              style={{
                color:
                  open === index
                    ? "var(--color-secondary)"
                    : "var(--color-primary)",
              }}
            >
              {open === index ? (
                <i className="bi bi-caret-up-fill"></i>
              ) : (
                <i className="bi bi-caret-down"></i>
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
