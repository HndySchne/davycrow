import "../components/styles/footer.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function footer() {
  return (
    <footer>
      <div className="footer-davy">
        <div className="contact-container">
          <ul>
            <li>
              <Link href="/about">A propos</Link>
            </li>
            <li>
              <Link href="/contact">Contactez moi</Link>
            </li>
          </ul>
        </div>
        <div className="socialmedia-container">
          <p>
            <a href="https://www.instagram.com/davy.crow.pro/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </p>
          <p>
            <a href="https://www.facebook.com/david.crow.779205">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </p>
        </div>
      </div>
      <div className="andy-container">
        <div className="andy-container__elements">
          <p>© Untitled. All rights reserved.</p>
          <p>Website made by :</p>
          <a href="https://www.linkedin.com/in/andy-schneider-b6a260117/">
            <p>Andy Schneider</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
