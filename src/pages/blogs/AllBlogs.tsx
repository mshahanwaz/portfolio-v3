import React, { Dispatch, SetStateAction, useEffect } from "react";
import "./AllBlogs.scss";
import { Link } from "react-router-dom";
import EachBlog from "./component/EachBlog";

type Props = {
  setOpen: Dispatch<SetStateAction<number>>;
  setShow: Dispatch<SetStateAction<number>>;
  blogs: Array<any>;
};

function AllBlogs({ setOpen, setShow, blogs }: Props) {
  useEffect(() => {
    setOpen(0);
    setShow(0);
  }, [setShow, setOpen]);

  return (
    <div className="allBlogs">
      <div className="wrapper">
        <Link to="/">
          <i className="bi bi-arrow-left-square" />
        </Link>
        <div className="allBlogs__blogs">
          {blogs?.map((blog, i) => (
            <EachBlog blog={blog} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllBlogs;
