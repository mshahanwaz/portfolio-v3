import "./Works.scss";
import Work from "./component/Work";
import { useEffect, useState } from "react";
import db from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";

function Works() {
  const [open, setOpen] = useState<number>(0);
  const [works, setWorks] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchWorks = async () => {
      const querySnapshot = await getDocs(collection(db, "works"));
      let arr: Array<any> = [];
      querySnapshot.forEach((doc: any) => {
        arr.push(doc.data());
      });
      setWorks(arr);
    };
    fetchWorks();
  }, []);

  return (
    <main className="component-container container" id="workexp">
      <div className="component-wrapper">
        <div className="works__media">
          <section className="works__section">
            <h2>Work Experience</h2>
          </section>
          <section className="works__section">
            {works?.map(
              (work, i) =>
                i < 3 && (
                  <Work
                    key={i}
                    index={i}
                    open={open}
                    setOpen={setOpen}
                    work={work}
                  />
                )
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export default Works;
