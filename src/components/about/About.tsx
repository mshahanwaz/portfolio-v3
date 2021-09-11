import "./About.scss";
import P1 from "../../assets/images/1.png";

interface Props {
  tags: Array<string>;
  description: string;
  resume: string;
  social: any;
}

function About({ tags, description, resume, social }: Props) {
  return (
    <main className="about container" id="about">
      <div className="about__wrapper">
        <div className="about__media">
          <div className="about__pic">
            <span></span>
            <img src={P1} alt="" />
          </div>
          <div className="about__text">
            <p>Little bit</p>
            <h2>About me</h2>
            <ul>
              <li>{tags && tags[0]}</li>
              {tags?.map(
                (tag: string, i: number) =>
                  i !== 0 && (
                    <>
                      <li key={i + tag}>|</li>
                      <li key={tag}>{tag}</li>
                    </>
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
                title={`@${social?.instagram}`}
              >
                <span className="dot"></span>
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href={social?.github}
                target="_blank"
                rel="noreferrer noopener"
                title={`@${social?.github}`}
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href={social?.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                title={`@${social?.linkedin}`}
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
