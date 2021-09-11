import "./Footer.scss";

interface Props {
  created_by: string;
}

function Footer({ created_by }: Props) {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div>
          <p>
            Created by <a href="/#">{created_by}</a> 💎
          </p>
          <p>2021 &copy; All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
