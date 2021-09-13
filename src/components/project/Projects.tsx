import "./Projects.scss";
import Project from "./component/Project";
import { useEffect, useState } from "react";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function Projects() {
  const [open, setOpen] = useState<Array<boolean>>([true, false, false]);
  const [previous, setPrevious] = useState<number>(0);
  const [projects, setProjects] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      let arr: Array<any> = [];
      querySnapshot.forEach((doc: any) => {
        arr.push(doc.data());
      });
      setProjects(arr);
    };
    fetchProjects();
  }, []);

  return (
    <main className="projects container" id="projects">
      <div className="projects__wrapper">
        <div className="projects__media">
          <section className="projects__section">
            {projects?.map(
              (project: any, i: number) =>
                i < 3 && (
                  <Project
                    key={i}
                    index={i}
                    open={open}
                    setOpen={setOpen}
                    setPrevious={setPrevious}
                    previous={previous}
                    project={project}
                  />
                )
            )}
            <div className="projects__button">
              <button className="button">Explore</button>
            </div>
          </section>
          <section className="projects__section">
            <h2>Featured Projects</h2>
            <div className="projects__previewImage">
              <a
                href={projects[previous]?.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="bi bi-arrow-up-right-square"></i>
              </a>
              <img
                src={
                  previous === 0
                    ? projects[0]?.image
                    : previous === 1
                    ? projects[1]?.image
                    : projects[2]?.image
                }
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
