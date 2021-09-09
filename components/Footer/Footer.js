import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>
                  Stack<span> Digital</span>
                </h3>
                <p>
                  Medellín, Antioquia <br />
                  COLOMBIA
                  <br />
                  <br />
                  <strong>Cel:</strong> +57 301 429 8240
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" className="facebook" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#" className="instagram" aria-label="Whatsapp">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                  <a href="#" className="google-plus" aria-label="Linkedin">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Navegación</h4>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="arrow-footer"
                  />{" "}
                  <a href="#">Home</a>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="arrow-footer"
                  />{" "}
                  <a href="#">Servicios</a>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="arrow-footer"
                  />{" "}
                  <a href="#">Contacto</a>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="arrow-footer"
                  />{" "}
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Nuestros servicios</h4>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="arrow-footer"
                  />{" "}
                  <a href="#">Diseño Web</a>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="arrow-footer"
                  />{" "}
                  <a href="#">Google Ads</a>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="arrow-footer"
                  />{" "}
                  <a href="#">Redes Sociales</a>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="arrow-footer"
                  />{" "}
                  <a href="#">Optimización SEO</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Suscríbete a nuestro Newsletter</h4>
              <label htmlFor="promo">
                Recibe los mejores consejos de marketing digital y un curso
                totalmente gratis
              </label>
              <form action="" method="post">
                <input type="email" name="email" id="promo" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          Copyright{" "}
          <strong>
            <span>Stack Digital</span>
          </strong>
          . Todos los derechos reservados
        </div>
        <div className="credits">
          Designed by{" "}
          <a href="https://stackdigital.netlify.app/">Stack Digital</a>
        </div>
      </div>
    </footer>
  );
}
