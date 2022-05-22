import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaSearch,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import { Logo } from "../components/Logo";

const Header = () => {
  return (
    <header>
      <div className="bg-secondary">
        <div className="header-nav pxy-4 ">
          <div className="header-nav-start">
            <a href="">FAQs</a>
            <span>|</span>
            <a href="">Help</a>
            <span>|</span>
            <a href="">Support</a>
          </div>
          <div className="header-nav-end">
            <i>
              <FaFacebookF />
            </i>
            <i>
              <FaTwitter />
            </i>
            <i>
              <FaLinkedinIn />
            </i>
            <i>
              <FaInstagram />
            </i>
            <i>
              <FaYoutube />
            </i>
          </div>
        </div>
      </div>
      <div className="topbar pxy-4">
        <div className="topbar-logo">
          <Logo isWhite={false} />
        </div>
        <div className="topbar-search">
          <>
            <input
              type="text"
              className="topbar-search-text"
              placeholder="Search for Products"
            />
            <i className="topbar-search-btn border">
              <FaSearch />
            </i>
          </>
        </div>
        <div className="topbar-end">
          <button>
            <i>
              <FaHeart />
            </i>
            0
          </button>
          <button>
            <i>
              <FaShoppingCart />
            </i>
            0
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
