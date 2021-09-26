import moment from "moment";
import "./Blog.scss";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  title: string;
  date: any;
  description: string;
  tags: Array<string>;
  link: string;
  close: boolean;
}

function Blog({ image, title, date, description, close, tags, link }: Props) {
  return (
    <div className="blog">
      <div
        className="blog__wrapper"
        style={
          !close
            ? {
                borderRight: "2px solid var(--color-tertiary)",
              }
            : {}
        }
      >
        <div className="blog__image">
          <Link to={link}>
            <img src={image} alt="" />
          </Link>
        </div>
        <div className="blog__details">
          <span>{moment.unix(date.seconds).format("DD MMM, YYYY")}</span>
          <Link to={link}>
            <h3 className="h-3">{title}</h3>
          </Link>
          <p className="para">{description}</p>
          <div className="blog__tags">
            {tags.map((tag, i) => (
              <span key={i} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
