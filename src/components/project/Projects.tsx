import "./Projects.scss";
import Project from "./component/Project";
import { useEffect, useState } from "react";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

function Projects() {
  const [open, setOpen] = useState<number>(0);
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
    <main className="component-container container" id="projects">
      <div className="component-wrapper">
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
                    project={project}
                  />
                )
            )}
            <div className="projects__button">
              <Link to="/projects" className="button_link">
                Explore
              </Link>
            </div>
          </section>
          <section className="projects__section">
            <h2>Featured Projects</h2>
            <div className="projects__previewImage">
              <img src={projects[open]?.image} alt="preview" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Projects;
