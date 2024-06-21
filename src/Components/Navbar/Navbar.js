import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";
import classes from "./Navbar.module.css";
const Navbar = () => {
  const location = useLocation();

  //States
  const [sidebar, setSidebar] = useState(false);
  const [size, setSize] = useState();

  //Handlers
  const showSidebarHandler = () => {
    setSidebar((prev) => !prev);
  };

  //Effects
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth <= 500);
    };

    const isSmallScreen = window.innerWidth <= 500;
    setSize(
      (location.pathname === "/prodDetail" || location.pathname === "/cart") &&
        isSmallScreen
    );
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);
  return (
    <div
      className={classes.container}
      style={{ display: size ? "none" : "flex" }}
    >
      <div className={classes.links}>
        <img src={logo} alt="logo" />
        <div>
          <Link to="/">Home</Link>
          <Link to="/">Find Doctors</Link>
          <Link to="/">About Us</Link>
        </div>
      </div>
      <div className={classes.buttons}>
        <button>Login</button>
        <button>Sign-up</button>
      </div>
      <button className={classes.hamburger} onClick={showSidebarHandler}>
        <svg
          width="34"
          height="16"
          viewBox="0 0 34 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H33"
            stroke="#3A643B"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M1.25 8H32.75"
            stroke="#3A643B"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M1.75 15H32.25"
            stroke="#3A643B"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <img src={logo} alt="logo" className={classes.mobileLogo} />
      <div
        className={classes.sidebar}
        style={{ display: sidebar ? "block" : "none" }}
      >
        <div>
          <Link to="/">Home</Link>
          <Link to="/">Find Doctors</Link>
          <Link to="/">About Us</Link>
        </div>
        <div>
          <button>Login</button>
          <button>Sign-up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
