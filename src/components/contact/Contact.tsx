import { useState } from "react";
import Footer from "../footer/Footer";
import "./Contact.scss";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import db from "../../firebase";

interface Props {
  created_by: string;
  social: any;
  email: string;
  phone: string;
  support_me: string;
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function Contact({ created_by, social, email, phone, support_me }: Props) {
  const [userEmail, setUserEmail] = useState<string>("");

  const handleForm = async (e) => {
    e.preventDefault();
    const input = document.querySelector(
      ".contact__submit"
    ) as HTMLInputElement;
    if (validateEmail(userEmail)) {
      await addDoc(collection(db, "emails"), {
        email: userEmail,
        time: Timestamp.fromDate(new Date()),
      });
      setUserEmail("");
      input.value = "Sent 😀";
      setTimeout(() => {
        input.value = "Ping me";
      }, 2000);
    } else {
      input.value = "Error ⚠️";
      setTimeout(() => {
        input.value = "Ping me 📌";
      }, 2000);
    }
  };
  return (
    <main className="component-container container" id="findme">
      <div className="component-wrapper">
        <div className="contact__media">
          <div className="contact__title">
            <h2>Find Me</h2>
          </div>
          <form onSubmit={handleForm}>
            <a
              href={social?.instagram}
              target="_blank"
              rel="noreferrer noopener"
              title={social?.instagram}
            >
              <span className="dot"></span>
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href={social?.github}
              target="_blank"
              rel="noreferrer noopener"
              title={social?.github}
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href={social?.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              title={social?.linkedin}
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <input
              className="contact__email"
              type="text"
              placeholder="OR send me your email..."
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <input
              className="contact__submit"
              type="submit"
              value="Ping Me 📌"
            />
          </form>
          <a
            className="button_link"
            href={support_me}
            target="_blank"
            rel="noopener noreferrer"
          >
            ⚡ Support Me ⚡
          </a>
        </div>
        <Footer created_by={created_by} />
      </div>
    </main>
  );
}

export default Contact;
