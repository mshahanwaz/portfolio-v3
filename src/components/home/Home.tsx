import "./Home.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import Pic from "../../assets/Pic";
interface Props {
  name: string;
  color: string;
}

function Home({ name, color }: Props) {
  return (
    <main className="component-container container">
      <div className="component-wrapper">
        <div className="home__media">
          <div className="home__text">
            <p>
              <span>Hi, I am</span>
            </p>
            <p>
              <span>{name}.</span>
            </p>
          </div>
          <div className="home__pic">
            <Pic color={color} />
          </div>
        </div>
        <a href="/#about" className="home__mouse">
          <i className="bi bi-mouse"></i>
        </a>
      </div>
    </main>
  );
}

export default Home;
