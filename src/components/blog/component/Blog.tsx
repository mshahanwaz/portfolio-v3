import "./Blog.scss";
import W1 from "../../../assets/images/w-1.png";

function Blog() {
  return (
    <div className="blog">
      <div className="blog__wrapper">
        <div className="blog__image">
          <a href="/#">
            <img src={W1} alt="" />
          </a>
        </div>
        <div className="blog__details">
          <span>21 Sept, 2021</span>
          <a href="/#">
            <h3 className="h-3">Title - Very Big</h3>
          </a>
          <p className="para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit Ullam
            suscipit, alias.
          </p>
          <div className="blog__tags">
            <span className="tag">ReactJS</span>
            <span className="tag">Firebase</span>
            <span className="tag">Fake Store API</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
