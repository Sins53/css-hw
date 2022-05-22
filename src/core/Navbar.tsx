import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { VscThreeBars } from "react-icons/vsc";
import { Logo } from "../components/Logo";
import carousel1 from "../assets/images/carousel/carousel-1.jpg";
import carousel2 from "../assets/images/carousel/carousel-2.jpg";

export const Navbar = () => {
  const [isactive, setIsactive] = useState(false);
  // const [ismdActive, setIsmdActive] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="navbar-categories">
          <button onClick={() => setIsactive(!isactive)}>
            Categories
            <span>
              {isactive ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </span>
          </button>
          {isactive ? (
            <ul>
              <li>Dresses</li>
              <li>Shirts</li>
              <li>Jeans</li>
              <li>SwimWear</li>
              <li>Sleepwear</li>
              <li>Sportswear</li>
              <li>Jumpsuits</li>
              <li>Blazers</li>
              <li>Jackets</li>
              <li>Shoes</li>
            </ul>
          ) : null}
        </div>
        <div className="navbar-nav">
          <div className="navbar-nav-links">
            <div className="navbar-nav-links-start">
              <a href="">Home</a>
              <a href="">Shop</a>
              <a href="">Shop Details</a>
              <a href="">Pages</a>
              <a href="">Contact us</a>
            </div>
            <div className="navbar-nav-links-end">
              <a href="">login</a>
              <a href="">Register</a>
            </div>
          </div>
          <div className="navbar-nav-md-links">
            <div className="logo">
              <Logo isWhite={false} />
            </div>
            <div className="end">
              <span>
                {/* <span onClick={() => setIsactive(!ismdActive)}> */}
                {/* <span onClick={() => console.log("hello")}> */}
                <VscThreeBars />
              </span>
            </div>
          </div>
          <div className="navbar-nav-carousel">
            <div className="img-xl">
              <img src={carousel1} />
              <div className="text-front">
                <h3>10% OFF YOUR FIRST ORDER</h3>
                <h1>Fashionable Dress</h1>
                <a href="">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
