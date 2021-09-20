import { collection, getDocs } from "@firebase/firestore";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import db from "../../firebase";
import "./AllProjects.scss";
import EachProject from "./component/EachProject";
import { Link } from "react-router-dom";

type Props = {
  setOpen: Dispatch<SetStateAction<number>>;
  setShow: Dispatch<SetStateAction<number>>;
};

function AllProjects({ setOpen, setShow }: Props) {
  const [projects, setProjects] = useState<Array<any>>([]);

  useEffect(() => {
    setOpen(0);
    setShow(0);
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      let arr: Array<any> = [];
      querySnapshot.forEach((doc: any) => {
        arr.push(doc.data());
      });
      setProjects(arr);
    };
    fetchProjects();
  }, [setShow, setOpen]);
  return (
    <div className="allProjects">
      <div className="wrapper">
        <Link to="/">
          <i className="bi bi-arrow-left-circle" />
        </Link>
        <div>
          {projects?.map((project, i) => (
            <EachProject project={project} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
