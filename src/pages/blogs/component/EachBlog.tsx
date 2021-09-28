import moment from "moment";
import "./EachBlog.scss";
import { Link } from "react-router-dom";

interface Props {
  blog: any;
}

function EachBlog({ blog }: Props) {
  console.log(blog);
  const { image, title, date, description, tags, link } = blog;
  return (
    <div className="eachBlog">
      <div className="eachBlog__image">
        <img src={image} alt="" />
      </div>
      <div className="eachBlog__details">
        <div className="eachBlog__head">
          <h2>{title}</h2>
          <span>{moment.unix(date.seconds).format("DD MMM, YYYY")}</span>
        </div>
        <div className="eachBlog__tags">
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
        <p className="eachBlog__description">{description}</p>
        <div className="eachBlog__links">
          <Link to={`/blogs/${link}`}>
            <i className="bi bi-arrow-up-right-square" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EachBlog;
