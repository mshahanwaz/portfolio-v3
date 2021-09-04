import Footer from "../footer/Footer";
import "./Contact.scss";

function Contact() {
  return (
    <main className="contact container" id="findme">
      <div className="contact__wrapper">
        <div className="contact__media">
          <div className="contact__title">
            <h2>Find Me</h2>
          </div>
          <div className="contact__social">
            <a href="/#1">
              <i className="bi bi-github" />
            </a>
            <a href="/#1">
              <i className="bi bi-linkedin" />
            </a>
            <a href="/#1">
              <i className="bi bi-instagram" />
            </a>
            <a href="/#1">
              <i className="bi bi-twitter" />
            </a>
          </div>
          <div className="contact__emailPhone">
            <a className="link" href="mailto:mohdshahanwaz110@gmail.com">
              <i className="bi bi-envelope" />
              <p>mohdshahanwaz110@gmail.com</p>
            </a>
            <a className="link" href="tel:+918802182176">
              <i className="bi bi-telephone" />
              <p>+91 88021 82176</p>
            </a>
          </div>
          <div className="contact__button">
            <button>Support Me</button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Contact;
