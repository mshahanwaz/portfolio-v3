import Footer from "../footer/Footer";
import "./Contact.scss";

interface Props {
  created_by: string;
  social: any;
  email: string;
  phone: string;
  support_me: string;
}

function Contact({ created_by, social, email, phone, support_me }: Props) {
  return (
    <main className="contact container" id="findme">
      <div className="contact__wrapper">
        <div className="contact__media">
          <div className="contact__title">
            <h2>Find Me</h2>
          </div>
          <div className="contact__social">
            <a href={social?.github}>
              <i className="bi bi-github" />
            </a>
            <a href={social?.linkedin}>
              <i className="bi bi-linkedin" />
            </a>
            <a href={social?.instagram}>
              <i className="bi bi-instagram" />
            </a>
            <a href={social?.twitter}>
              <i className="bi bi-twitter" />
            </a>
          </div>
          <div className="contact__emailPhone">
            <a className="link" href={`mailto:${email}`}>
              <i className="bi bi-envelope" />
              <p>{email}</p>
            </a>
            <a className="link" href={`tel:${phone}`}>
              <i className="bi bi-telephone" />
              <p>{phone}</p>
            </a>
          </div>
          <div className="contact__button">
            <a
              className="button_link"
              href={support_me}
              target="_blank"
              rel="noopener noreferrer"
            >
              Support Me
            </a>
          </div>
        </div>
      </div>
      <Footer created_by={created_by} />
    </main>
  );
}

export default Contact;
