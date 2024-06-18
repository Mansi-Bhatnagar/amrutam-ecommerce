import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <h4>Information</h4>
      <span>About Us</span>
      <span>Terms and Conditions</span>
      <span>Privacy Policy</span>
      <span>Privacy Policy for Mobile Apps</span>
      <span>Shipping and Returns Policy</span>
      <span>International Delivery</span>
      <span>For Businesses, Hotels and Resorts</span>
    </div>
  );
};

export default Footer;
