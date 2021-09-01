import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">
          <span className="header__burger"></span>
          <a href="/#">M. Shahanwaz</a>
        </div>
        <div className="header__links">
          <div className="header__link">
            <a href="/#">About</a>
          </div>
          <div className="header__link">
            <a href="/#">Projects</a>
          </div>
          <div className="header__link">
            <a href="/#">Work Exp.</a>
          </div>
          <div className="header__link">
            <a href="/#">Blogs</a>
          </div>
          <div className="header__link">
            <a href="/#">Find Me</a>
          </div>
        </div>
        <div className="header__toggle">
          <input type="checkbox" name="toggler" id="toggler" />
          <label htmlFor="toggler"></label>
        </div>
      </nav>
    </header>
  );
}

export default Header;
