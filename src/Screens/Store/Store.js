import { useNavigate } from "react-router-dom";
import Product from "../../Components/Product/Product";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import HomeAppContainer from "../../Components/HomeAppContainer/HomeAppContainer";
import product1 from "../../Assets/Images/product1.png";
import product2 from "../../Assets/Images/product2.png";
import product3 from "../../Assets/Images/product3.png";
import arrow from "../../Assets/Images/arrow.png";

import classes from "./Store.module.css";
import FilterContainer from "../../Components/FilterContainer/FilterContainer";
import BottomNavigation from "../../Components/BottomNavigation/BottomNavigation";
import MobileFilters from "../../Components/MobileFilters/MobileFilters";

const Store = () => {
  const navigate = useNavigate();

  //Handlers
  const prodDetailHandler = () => {
    navigate("/prodDetail");
  };
  return (
    <div>
      <Header name={"Store"} show={true} />
      <FilterContainer />
      <div className={classes.productContainer}>
        <h3>Summer Collection</h3>
        <div className={classes.prodCon1}>
          <Product
            src={product1}
            name={
              "Amrutam Kuntal care Hair Spa | Do- it yourself Hair Treatment"
            }
            cost={"649.00"}
            amount={"200ml"}
            rating={"52"}
            onClick={prodDetailHandler}
          />
          <div className={classes.border} />

          <Product
            src={product2}
            name={
              "Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair"
            }
            cost={"649.00"}
            amount={"200ml"}
            rating={"52"}
          />
          <div className={classes.border} />

          <Product
            src={product3}
            name={
              "Amrutam Nari Sondarya Malt | Complete Care For Women's Health And Beauty"
            }
            cost={"649.00"}
            amount={"200ml"}
            rating={"52"}
          />
          <div className={classes.border} />

          <div className={classes.moreProd}>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <h3 style={{ marginTop: "90px" }}>Summer Collection</h3>
        <div className={classes.prodCon2}>
          <Product
            src={product1}
            name={
              "Amrutam Kuntal care Hair Spa | Do- it yourself Hair Treatment"
            }
            cost={"649.00"}
            amount={"200ml"}
            rating={"52"}
          />
          <div className={classes.border} />
          <Product
            src={product2}
            name={
              "Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair"
            }
            cost={"649.00"}
            amount={"200ml"}
            rating={"52"}
          />
          <div className={classes.border} />

          <Product
            src={product3}
            name={
              "Amrutam Nari Sondarya Malt | Complete Care For Women's Health And Beauty"
            }
            cost={"649.00"}
            amount={"200ml"}
            rating={"52"}
          />
          <div className={classes.moreProd}>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <MobileFilters />
      <div
        style={{ background: " #EAF2EA", width: "100%", height: "75px" }}
        className={classes.bottom}
      >
        <BottomNavigation />
      </div>
      <HomeAppContainer />
      <Footer />
    </div>
  );
};

export default Store;
