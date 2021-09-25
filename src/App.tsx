import { collection, getDocs } from "@firebase/firestore";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import db from "./firebase";
import AllBlogs from "./pages/blogs/AllBlogs";
import FullBlog from "./pages/blogs/component/FullBlog";
import AllProjects from "./pages/projects/AllProjects";

function App() {
  const [open, setOpen] = useState<number>(0);
  const [show, setShow] = useState<number>(0);
  const [color, setColor] = useState<string>("");
  const [data, setData] = useState<any>({});
  const [blogs, setBlogs] = useState<Array<any>>([]);

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
              <Home image={data.image} name={data.name} />
              {/* <About
                image={data.image}
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
              /> */}
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
