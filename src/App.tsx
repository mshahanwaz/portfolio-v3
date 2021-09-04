import { useState } from "react";
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
  const handleChange = () => {
    setOpen(open === 1 ? 2 : 1);
  };

  return (
    <div className="app">
      <Header open={open} handleChange={handleChange} />
      <div onClick={(a) => setOpen(open > 0 ? 2 : 0)}>
        <Home />
        <About />
        <Projects />
        <Works />
        <Blogs />
        <Skills />
        <Chart />
        <Contact />
      </div>
    </div>
  );
}

export default App;
