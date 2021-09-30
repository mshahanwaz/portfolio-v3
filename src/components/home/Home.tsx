import "./Home.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

interface Props {
  name: string;
  image: string;
}

function Home({ name, image }: Props) {
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
          <div className="home__pics">
            <img src={image} alt="" />
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
