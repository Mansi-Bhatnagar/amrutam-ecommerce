import Product from "../Product/Product";
import product1 from "../../Assets/Images/product1.png";
import product2 from "../../Assets/Images/product2.png";
import product3 from "../../Assets/Images/product3.png";
import classes from "./SimilarProducts.module.css";

const SimilarProducts = () => {
  return (
    <div className={classes.similarProd}>
      <h3>People also bought</h3>
      <div className={classes.prodContainer}>
        <Product
          src={product1}
          name={"Amrutam Kuntal care Hair Spa | Do- it yourself Hair Treatment"}
          cost={"649.00"}
          amount={"200ml"}
          rating={"52"}
          add={true}
        />
        <Product
          src={product2}
          name={
            "Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair"
          }
          cost={"649.00"}
          amount={"200ml"}
          rating={"52"}
          add={true}
        />
        <Product
          src={product3}
          name={
            "Amrutam Nari Sondarya Malt | Complete Care For Women's Health And Beauty"
          }
          cost={"649.00"}
          amount={"200ml"}
          rating={"52"}
          add={true}
        />
      </div>
    </div>
  );
};

export default SimilarProducts;
