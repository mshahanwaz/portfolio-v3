import "./Projects.scss";
import W1 from "../../assets/images/w-1.png";
import W2 from "../../assets/images/w-2.png";
import W3 from "../../assets/images/w-3.png";
import Project from "./component/Project";
import { useState } from "react";

function Projects() {
  const [open, setOpen] = useState<Array<boolean>>([true, false, false]);
  const [previous, setPrevious] = useState<number>(0);

  return (
    <main className="projects container" id="projects">
      <div className="projects__wrapper">
        <div className="projects__media">
          <section className="projects__section">
            <Project
              index={0}
              open={open}
              setOpen={setOpen}
              setPrevious={setPrevious}
              previous={previous}
            />
            <Project
              index={1}
              open={open}
              setOpen={setOpen}
              setPrevious={setPrevious}
              previous={previous}
            />
            <Project
              index={2}
              open={open}
              setOpen={setOpen}
              setPrevious={setPrevious}
              previous={previous}
            />
            <div className="projects__button">
              <button className="button">Explore</button>
            </div>
          </section>
          <section className="projects__section">
            <h2>Featured Projects</h2>
            <div className="projects__previewImage">
              <a href="/#cool" target="_blank" rel="noreferror noopener">
                <i className="bi bi-arrow-up-right-square"></i>
              </a>
              <img
                src={previous === 0 ? W1 : previous === 1 ? W2 : W3}
                alt=""
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Projects;
