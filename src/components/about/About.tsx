import "./About.scss";
import P1 from "../../assets/images/1.png";

function About() {
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
              <li>Developer</li>
              <li>|</li>
              <li>Designer</li>
              <li>|</li>
              <li>Creator</li>
            </ul>
            <p>
              Hello there, my name is <strong>Mohammad Shahanwaz ✌️</strong> and
              I am Delhi-based software engineer who is specialised in building
              exceptional digital experiences. I build things not entirely with
              code but also with <strong>emotions</strong> &{" "}
              <strong>coffee ☕</strong>.
            </p>
            <div className="about__social">
              <a
                href="https://instagram.com/imshahanwaz"
                target="_blank"
                rel="noreferrer noopener"
                title="@imshahanwaz"
              >
                <span className="dot"></span>
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://github.com/mshahanwaz"
                target="_blank"
                rel="noreferrer noopener"
                title="mshahanwaz"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://github.com/mshahanwaz"
                target="_blank"
                rel="noreferrer noopener"
                title="@mshahanwaz"
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
