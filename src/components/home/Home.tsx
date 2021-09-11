import moment from "moment";
import { useEffect, useState } from "react";
import "./Home.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import P1 from "../../assets/images/1.png";

interface Props {
  name: string;
}

function Home({ name }: Props) {
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
            <img src={P1} alt="" />
          </div>
        </div>
        <div className="home__left">{time}</div>
        <div className="home__mouse">
          <a href="/#about">
            <i className="bi bi-mouse"></i>
          </a>
        </div>
        <div className="home__right">
          <div className="home__786" title="786">
            ۷۸۶
          </div>
          <span></span>
        </div>
      </div>
    </main>
  );
}

export default Home;
