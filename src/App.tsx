import { collection, getDocs } from "@firebase/firestore";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { clearTimeout } from "timers";
import "./App.scss";
import About from "./components/about/About";
import Blogs from "./components/blog/Blogs";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Loading from "./components/loading/Loading";
import Projects from "./components/project/Projects";
import Skills from "./components/skill/Skills";
import Works from "./components/work/Works";
import db from "./firebase";
import AllBlogs from "./pages/blogs/AllBlogs";
import FullBlog from "./pages/blogs/component/FullBlog";
import AllProjects from "./pages/projects/AllProjects";

function App() {
  const [open, setOpen] = useState<number>(0);
  const [show, setShow] = useState<number>(0);
  const [data, setData] = useState<any>({});
  const [blogs, setBlogs] = useState<Array<any>>([]);
  const [wait, setWait] = useState<boolean>(true);
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("/data.json")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err.message));
    };
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      let arr: Array<any> = [];
      querySnapshot.forEach((doc: any) => {
        arr.push(doc.data());
      });
      setBlogs(arr);
    };
    fetchBlogs();
    fetchData();
    const fetchColor = localStorage.getItem("color");
    const root = document.documentElement;
    if (fetchColor) {
      root.style.setProperty("--color-tertiary", fetchColor);
      setColor(fetchColor);
    } else {
      root.style.setProperty("--color-tertiary", "#fff");
      setColor("#fff");
    }
    const waiting = setTimeout(() => {
      setWait(false);
    }, 2000);
    return () => {
      clearTimeout(waiting);
    };
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/projects">
          <AllProjects setOpen={setOpen} setShow={setShow} />
        </Route>
        <Route path="/blogs/:id" component={FullBlog} />
        <Route exact path="/blogs">
          <AllBlogs blogs={blogs} setOpen={setOpen} setShow={setShow} />
        </Route>
        <Route path="/">
          {wait ? (
            <Loading />
          ) : (
            <div className="app">
              <Header
                open={open}
                setOpen={setOpen}
                show={show}
                setShow={setShow}
                setColor={setColor}
              />
              <div
                onClick={(_) => {
                  setOpen(open > 0 ? 2 : 0);
                  setShow(show > 0 ? 2 : 0);
                }}
              >
                <Home name={data.name} color={color} />
                <About
                  tags={data.tags}
                  description={data.description}
                  resume={data.resume}
                  social={data.social}
                  color={color}
                />
                <Projects />
                <Works />
                <Blogs />
                <Skills skills={data.skills} />
                <Contact
                  created_by={data.created_by}
                  social={data.social}
                  email={data.email}
                  phone={data.phone}
                  support_me={data.support_me}
                />
              </div>
            </div>
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
