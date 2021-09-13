import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import db from "../../firebase";
import "./Blogs.scss";
import Blog from "./component/Blog";

function Blogs() {
  const [blogs, setBlogs] = useState<Array<any>>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      let arr: Array<any> = [];
      querySnapshot.forEach((doc: any) => {
        arr.push(doc.data());
      });
      setBlogs(arr);
    };
    fetchBlogs();
  }, []);

  return (
    <main className="blogs container" id="blogs">
      <div className="blogs__wrapper">
        <div className="blogs__media">
          <div className="blogs__title">
            <h2>Tiny Blogs</h2>
          </div>
          <div className="blogs__list">
            {blogs?.map(
              (blog, i) =>
                i < 3 && (
                  <Blog
                    key={new Date().toDateString()}
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
            <button>Explore</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Blogs;
