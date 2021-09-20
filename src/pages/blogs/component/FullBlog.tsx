import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import db from "../../../firebase";
import { useParams } from "react-router-dom";
import moment from "moment";
import { Link } from "react-router-dom";
import "./FullBlog.scss";

function FullBlog() {
  const [blog, setBlog] = useState<any>({ fetched: 0 });
  const { id } = useParams();
  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      querySnapshot.forEach((doc: any) => {
        if (doc.data().link === id) setBlog({ fetched: 1, ...doc.data() });
        else setBlog({ fetched: -1 });
      });
    };
    fetchBlogs();
  }, [id]);
  return blog.fetched === -1 ? (
    <p>404 page</p>
  ) : blog.fetched === 1 ? (
    <div className="fullBlog">
      <div className="wrapper">
        <Link to="/blogs">
          <i className="bi bi-arrow-left-circle" />
        </Link>
        <img src={blog.image} alt="" />
        <div className="fullBlog__details">
          <div className="fullBlog__head">
            <h2>{blog.title}</h2>
            <span>{moment.unix(blog.date.seconds).format("DD MMM, YYYY")}</span>
          </div>
          <div className="fullBlog__tags">
            {blog.tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
          <p className="fullBlog__description">{blog.description}</p>
          <p className="fullBlog__blog">{blog.blog}</p>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default FullBlog;
