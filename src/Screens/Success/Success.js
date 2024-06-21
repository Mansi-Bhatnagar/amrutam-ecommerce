import Footer from "../../Components/Footer/Footer";
import HomeAppContainer from "../../Components/HomeAppContainer/HomeAppContainer";
import SimilarProducts from "../../Components/SimilarProducts/SimilarProducts";
import successLady1 from "../../Assets/Images/successLady1.png";
import classes from "./Success.module.css";

const Success = () => {
  return (
    <div className={classes.container}>
      <div className={classes.success}>
        <img src={successLady1} alt="lady" />
        <h2>Order Success</h2>
        <p>
          Congratulations! Your Ayurvedic wellness journey has begun. Your order
          is on its way to bring balance and bliss to your life
        </p>
        <button>View my Order</button>
      </div>
      <SimilarProducts />
      <HomeAppContainer />
      <Footer />
    </div>
  );
};

export default Success;
