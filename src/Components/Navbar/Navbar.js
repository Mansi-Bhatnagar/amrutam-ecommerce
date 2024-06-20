import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";
import classes from "./Navbar.module.css";
const Navbar = () => {
  //States
  const [sidebar, setSidebar] = useState(false);

  //Handlers
  const showSidebarHandler = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <div className={classes.container}>
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
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M1.25 8H32.75"
            stroke="#3A643B"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M1.75 15H32.25"
            stroke="#3A643B"
            stroke-width="2"
            stroke-linecap="round"
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
