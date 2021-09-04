import "./Blogs.scss";
import Blog from "./component/Blog";

function Blogs() {
  return (
    <main className="blogs container" id="blogs">
      <div className="blogs__wrapper">
        <div className="blogs__media">
          <div className="blogs__title">
            <h2>Blogs</h2>
          </div>
          <div className="blogs__list">
            <Blog />
            <Blog />
            <Blog />
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
