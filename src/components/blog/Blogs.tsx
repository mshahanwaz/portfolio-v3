import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import db from "../../firebase";
import "./Blogs.scss";
import Blog from "./component/Blog";
import { Link } from "react-router-dom";

function Blogs() {
  const [blogs, setBlogs] = useState<Array<any>>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      let arr: Array<any> = [];
      querySnapshot.forEach((doc: any) => {
        arr.push(doc.data());
        arr.push(doc.data());
        arr.push(doc.data());
        arr.push(doc.data());
        arr.push(doc.data());
        arr.push(doc.data());
      });
      setBlogs(arr);
    };
    fetchBlogs();
  }, []);

  return (
    <main className="component-container container" id="blogs">
      <div className="component-wrapper">
        <div className="blogs__media">
          <div className="blogs__title">
            <h2>Tiny Blogs</h2>
          </div>
          <div className="blogs__list">
            {blogs?.map(
              (blog, i) =>
                i < blogs?.length && (
                  <Blog
                    close={i === blogs?.length - 1 ? true : false}
                    key={i}
                    image={blog.image}
                    date={blog.date}
                    title={blog.title}
                    description={blog.description}
                    tags={blog.tags}
                    link={blog.link}
                  />
                )
            )}
          </div>
          <div className="blogs__button">
            <Link to="/blogs" className="button_link">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Blogs;
