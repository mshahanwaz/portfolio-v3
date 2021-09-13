import moment from "moment";
import "./Blog.scss";

interface Props {
  image: string;
  title: string;
  date: any;
  description: string;
  tags: Array<string>;
  link: string;
}

function Blog({ image, title, date, description, tags, link }: Props) {
  return (
    <div className="blog">
      <div className="blog__wrapper">
        <div className="blog__image">
          <a href={link}>
            <img src={image} alt="" />
          </a>
        </div>
        <div className="blog__details">
          <span>{moment.unix(date.seconds).format("DD MMM, YYYY")}</span>
          <a href={link}>
            <h3 className="h-3">{title}</h3>
          </a>
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
