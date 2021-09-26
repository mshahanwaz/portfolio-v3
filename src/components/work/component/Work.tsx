import moment from "moment";
import { Dispatch, SetStateAction } from "react";
import "./Work.scss";

interface Props {
  index: number;
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  work: any;
}

function Work(props: Props) {
  const { open, setOpen, index, work } = props;

  const handleOpen = () => {
    setOpen(index);
  };

  return (
    <div className={`work ${open === index && "open"}`}>
      <div className="work__wrapper">
        <div
          className="work__head"
          onClick={() => handleOpen()}
          style={
            open === index
              ? {
                  backgroundColor: "var(--color-tertiary)",
                }
              : {}
          }
        >
          <div className="work__title">
            <h3
              style={{
                color:
                  open === index
                    ? "var(--color-secondary)"
                    : "var(--color-tertiary)",
              }}
            >
              {work.title}
            </h3>
            <span
              style={{
                color:
                  open === index
                    ? "var(--color-secondary)"
                    : "var(--color-lightgrey)",
              }}
            >
              {moment.unix(work.date.start.seconds).format("DD MMM, YYYY")} -{" "}
              {moment.unix(work.date.end.seconds).format("DD MMM, YYYY")}
            </span>
          </div>
          <div className="work__icons">
            <a
              href={work?.link}
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
        <div className="work__detail">
          <div className="work__whom">
            <h4>{work.subtitle}</h4>
          </div>
          <div className="work__description">
            <p>{work.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
