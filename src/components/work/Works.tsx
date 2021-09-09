import "./Works.scss";
import Work from "./component/Work";
import { useState } from "react";

function Works() {
  const [open, setOpen] = useState<Array<boolean>>([true, false, false]);
  const [previous, setPrevious] = useState<number>(0);

  return (
    <main className="works container" id="workexp">
      <div className="works__wrapper">
        <div className="works__media">
          <div className="works__head">
            <h2>Work Experience</h2>
          </div>
          <div className="works__sections">
            <section className="works__section">
              <Work
                index={0}
                open={open}
                setOpen={setOpen}
                setPrevious={setPrevious}
                previous={previous}
              />
              <Work
                index={1}
                open={open}
                setOpen={setOpen}
                setPrevious={setPrevious}
                previous={previous}
              />
              <Work
                index={2}
                open={open}
                setOpen={setOpen}
                setPrevious={setPrevious}
                previous={previous}
              />
            </section>
            <section className="works__section">
              <div className="works__details">
                <h4>Title - Very Big And Sophisticated</h4>
                <div className="works__points">
                  <div className="works__point">
                    <i className="bi bi-play-fill"></i>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Optio vitae porro alias amet voluptates?
                    </p>
                  </div>
                  <div className="works__point">
                    <i className="bi bi-play-fill"></i>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Optio vitae porro alias amet voluptates?
                    </p>
                  </div>
                </div>
                <div className="works__footer">
                  <ul>
                    <li>21 Sept, 2021</li>
                    <li>-</li>
                    <li>21 Sept, 2022</li>
                  </ul>
                  <a href="/#adsf">
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
