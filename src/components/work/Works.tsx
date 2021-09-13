import "./Works.scss";
import Work from "./component/Work";
import { useEffect, useState } from "react";
import db from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";
import moment from "moment";

function Works() {
  const [open, setOpen] = useState<Array<boolean>>([true, false, false]);
  const [previous, setPrevious] = useState<number>(0);
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

  console.log(works);

  return (
    <main className="works container" id="workexp">
      <div className="works__wrapper">
        <div className="works__media">
          <div className="works__head">
            <h2>Work Experience</h2>
          </div>
          <div className="works__sections">
            <section className="works__section">
              {works?.map(
                (work, i) =>
                  i < 3 && (
                    <Work
                      key={new Date().toDateString()}
                      index={i}
                      open={open}
                      setOpen={setOpen}
                      setPrevious={setPrevious}
                      previous={previous}
                      work={work}
                    />
                  )
              )}
            </section>
            <section className="works__section">
              <div className="works__details">
                <h4>{works[previous]?.title}</h4>
                <div className="works__points">
                  <div className="works__point">
                    <i className="bi bi-play-fill"></i>
                    <p>{works[previous]?.description}</p>
                  </div>
                </div>
                <div className="works__footer">
                  <ul>
                    <li>
                      {moment
                        .unix(works[previous]?.date?.start.seconds)
                        .format("DD MMM, YYYY")}
                    </li>
                    <li>-</li>
                    <li>
                      {moment
                        .unix(works[previous]?.date?.end.seconds)
                        .format("DD MMM, YYYY")}
                    </li>
                  </ul>
                  <a href={works[previous]?.link}>
                    <i className="bi bi-arrow-up-right-square"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Works;
