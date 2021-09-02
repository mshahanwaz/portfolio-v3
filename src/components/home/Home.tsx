import moment from "moment";
import { useEffect, useState } from "react";
import "./Home.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import P1 from "../../assets/images/1.png";
import P2 from "../../assets/images/2.png";
import P3 from "../../assets/images/3.png";

function Home() {
  const [time, setTime] = useState(moment().format("HH:mm:ss"));
  const updateTime = () => setTime(moment().format("HH:mm:ss"));
  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <main className="home container">
      <div className="home__wrapper">
        <div className="home__media">
          <div className="home__text">
            <p>Hi, I am</p>
            <p>Shahanwaz.</p>
          </div>
          <div className="home__pics">
            <img src={P1} alt="" />
            <img src={P2} alt="" />
            <img src={P3} alt="" />
          </div>
        </div>
        <div className="home__left">Time - {time}</div>
        <div className="home__mouse">
          <a href="/#about">
            <i className="bi bi-mouse"></i>
          </a>
        </div>
        <div className="home__right">
          <div className="home__login">
            <i className={"bi bi-person-circle"}></i>
          </div>
          <span></span>
          <div className="home__todo" >Todo</div>
        </div>
      </div>
    </main>
  );
}

export default Home;
