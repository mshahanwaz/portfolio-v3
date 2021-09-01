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
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Works />
      <Blogs />
      <Chart />
      <Contact />
    </div>
  );
}

export default App;
