import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";
import About from "./components/about/About";
import Blogs from "./components/blog/Blogs";
import Chart from "./components/chart/Chart";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Projects from "./components/project/Projects";
import Skills from "./components/skill/Skills";
import Works from "./components/work/Works";

function App() {
  const [open, setOpen] = useState<number>(0);
  const [show, setShow] = useState<number>(0);
  const [color, setColor] = useState<string>("");
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("/data.json")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err.message));
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <Header
        open={open}
        setOpen={setOpen}
        setColor={setColor}
        show={show}
        setShow={setShow}
      />
      <div
        onClick={(_) => {
          setOpen(open > 0 ? 2 : 0);
          setShow(show > 0 ? 2 : 0);
        }}
      >
        <Home name={data.name} />
        <About
          tags={data.tags}
          description={data.description}
          resume={data.resume}
          social={data.social}
        />
        <Projects />
        <Works />
        <Blogs />
        <Skills skills={data.skills} />
        <Chart color={color} github_username={data.github_username} />
        <Contact
          created_by={data.created_by}
          social={data.social}
          email={data.email}
          phone={data.phone}
          support_me={data.support_me}
        />
      </div>
    </div>
  );
}

export default App;
