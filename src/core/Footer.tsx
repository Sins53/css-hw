import PaymentImg from "../assets/images/footer/payments.png";
import { Logo } from "../components/Logo";
import { TiLocationOutline, TiMail, TiPhone } from "react-icons/ti";
import { FooterList } from "../components/FooterList";

export const Footer = () => {
  return (
    <footer>
      <div className="footer pxy-4">
        <div className="footer-logo">
          <Logo isWhite={true} />
          <p>
            Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no
            sit erat lorem et magna ipsum dolore amet erat.
          </p>
          <p>
            <i>
              <TiLocationOutline />
            </i>
            123 Street, New York, USA
          </p>
          <p>
            <i>
              <TiMail />
            </i>
            info@example.com
          </p>
          <p>
            <i>
              <TiPhone />
            </i>
            +012 345 67890
          </p>
        </div>
        <div className="footer-info">
          <div className="link-1">
            <h3>Quick Links</h3>
            <FooterList />
          </div>
          <div className="link-2">
            <h3>Quick Links</h3>
            <FooterList />
          </div>
          <div className="newsletter">
            <h3>News Letter</h3>
            <form action="">
              <div>
                <input type="text" placeholder="Your Name" />
              </div>
              <div>
                <input type="email" placeholder="Your Email" />
              </div>
              <div>
                <button type="button">Subscribe Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="end-credit">
        <div className="end-credit-text">
          <p>
            &copy;
            <b>Your Site Name</b> . All Rights Reserved. Designed by
            <b> Sins.</b>
          </p>
        </div>
        <div className="end-credit-img">
          <img src={PaymentImg} />
        </div>
      </div>
    </footer>
  );
};
