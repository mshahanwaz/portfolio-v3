import "./About.scss";
import { Fragment } from "react";
import Pic from "../../assets/Pic";

interface Props {
  tags: Array<string>;
  description: string;
  resume: string;
  social: any;
  color: string;
}

function About({ tags, description, resume, social, color }: Props) {
  return (
    <main className="about component-container container" id="about">
      <div className="about__wrapper component-wrapper">
        <div className="about__media">
          <div className="about__pic">
            <span></span>
            <Pic color={color} />
          </div>
          <div className="about__text">
            <h2>About me</h2>
            <ul>
              <li>{tags && tags[0]}</li>
              {tags?.map(
                (tag: string, i: number) =>
                  i !== 0 && (
                    <Fragment key={i}>
                      <li className="dash">|</li>
                      <li>{tag}</li>
                    </Fragment>
                  )
              )}
            </ul>
            <p>{description}</p>
            <div className="about__social">
              <a
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                title="Resume"
              >
                <i className="bi bi-file-earmark-arrow-down"></i>
              </a>
              <a
                href={social?.instagram}
                target="_blank"
                rel="noreferrer noopener"
                title={social?.instagram}
              >
                <span className="dot"></span>
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href={social?.github}
                target="_blank"
                rel="noreferrer noopener"
                title={social?.github}
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href={social?.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                title={social?.linkedin}
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
