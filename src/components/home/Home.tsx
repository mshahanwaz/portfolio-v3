import moment from "moment";
import { useEffect, useState } from "react";
import "./Home.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

interface Props {
  name: string;
  image: string;
}

function Home({ name, image }: Props) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => setTime(moment().format("HH:mm"));
    setTime(moment().format("HH:mm"));
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <main className="home container">
      <div className="home__wrapper">
        <div className="home__media">
          <div className="home__text">
            <p>Hi, I am</p>
            <p>{name}.</p>
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
