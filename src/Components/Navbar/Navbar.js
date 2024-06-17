import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";
import classes from "./Navbar.module.css";
const Navbar = () => {
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
    </div>
  );
};

export default Navbar;
