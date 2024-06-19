import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import HomeAppContainer from "../../Components/HomeAppContainer/HomeAppContainer";
import Footer from "../../Components/Footer/Footer";
import SimilarProducts from "../../Components/SimilarProducts/SimilarProducts";
import product1 from "../../Assets/Images/product1.png";
import ruppee from "../../Assets/Images/ruppee.png";
import classes from "./Cart.module.css";
const Cart = () => {
  //States
  const [cartProducts, setCartProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState();

  //Handlers
  const incrementHandler = (index) => {
    setCartProducts((prev) => {
      let temp = [...prev];
      temp[index].quantity += 1;
      temp[index].quantity -= 0.5;
      return temp;
    });
  };
  const decrementHandler = (index) => {
    setCartProducts((prev) => {
      let temp = [...prev];
      if (temp[index].quantity !== 0) {
        temp[index].quantity -= 1;
        temp[index].quantity += 0.5;
      }

      return temp;
    });
  };

  //Effects
  useEffect(() => {
    if (localStorage.getItem("amrutam")) {
      setCartProducts(JSON.parse(localStorage.getItem("amrutam")));
    } else {
      setCartProducts([]);
    }
  }, []);

  useEffect(() => {
    setTotalAmount(
      cartProducts.reduce((acc, item) => acc + item.quantity * item.price, 0)
    );
  }, [cartProducts]);

  return (
    <div>
      <Header name={"Cart"} show={false} padding={"72px 0"} />
      <div className={classes.headings}>
        <h4>PRODUCTS</h4>
        <h4>QUANTITY</h4>
        <h4>PRICE</h4>
      </div>
      {cartProducts.map((product) => (
        <div key={product.index} className={classes.container}>
          <div className={classes.prodDesc}>
            <img src={product1} alt="product" />
            <div className={classes.info}>
              <p>
                Amrutam Kuntal Care Hair Spa | Do-It-Yourself Hair Treatment
              </p>
              <div className={classes.costLine}>
                <div>
                  <img src={ruppee} alt="ruppee" className={classes.ruppee} />
                  <span>649.00</span>
                </div>

                <svg
                  width="4"
                  height="5"
                  viewBox="0 0 4 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2" cy="2.5" r="2" fill="black" />
                </svg>
                <span>200 ml</span>
              </div>
              <div className={classes.buttons}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.9987 12V21.529C23.9987 22.8919 22.8906 24 21.5278 24H2.4709C1.10805 24 0 22.8919 0 21.529V2.47103C0 1.10811 1.10805 0 2.4709 0H11.9993C12.4549 0 12.823 0.368085 12.823 0.823678C12.823 1.27927 12.4549 1.64736 11.9993 1.64736H2.4709C2.01662 1.64736 1.64727 2.01673 1.64727 2.47103V21.5303C1.64727 21.9846 2.01662 22.354 2.4709 22.354H21.5291C21.9834 22.354 22.3527 21.9846 22.3527 21.5303V12.0013C22.3527 11.5457 22.7208 11.1776 23.1764 11.1776C23.6319 11.1776 24 11.5457 24 12.0013L23.9987 12ZM7.79255 11.2008L18.6556 0.337115C19.106 -0.112053 19.837 -0.112053 20.2861 0.337115L23.6617 3.71288C24.1109 4.16205 24.1109 4.89304 23.6617 5.3435L12.7973 16.2085C12.5799 16.426 12.2877 16.5457 11.9827 16.5457C11.9518 16.5457 11.9196 16.5444 11.8888 16.5418L8.76795 16.287C8.203 16.2406 7.759 15.7966 7.71268 15.2316L7.45786 12.1119C7.42955 11.7735 7.55181 11.4427 7.79246 11.2033L7.79255 11.2008ZM9.11936 12.2046L9.32141 14.6795L11.7962 14.8816L22.1482 4.52894L19.4714 1.85198L9.11936 12.2046Z"
                    fill="black"
                  />
                </svg>
                <svg
                  width="22"
                  height="25"
                  viewBox="0 0 22 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.168 2.97252H15.6247L15.5269 2.41172C15.2835 1.01442 14.0766 0 12.6575 0H9.34388C7.92474 0 6.71783 1.01442 6.47449 2.41172L6.37669 2.97252H0.832345C0.372464 2.97252 0 3.34499 0 3.80487C0 4.26475 0.372464 4.63721 0.832345 4.63721H1.3432L2.38051 22.2288C2.47102 23.7656 3.74867 24.9704 5.28852 24.9704H16.7115C18.2513 24.9704 19.5289 23.7656 19.6195 22.2288L20.6568 4.63721H21.1677C21.6275 4.63721 22 4.26475 22 3.80487C22 3.34499 21.6275 2.97252 21.1677 2.97252H21.168ZM8.1126 2.6968C8.21768 2.09855 8.73476 1.66365 9.34239 1.66365H12.6561C13.2637 1.66365 13.7818 2.09855 13.8858 2.6968L13.9337 2.97146H8.06361L8.11147 2.6968H8.1126ZM17.9582 22.1289C17.9187 22.7875 17.3714 23.3036 16.7118 23.3036H5.28883C4.62919 23.3036 4.08088 22.7875 4.04239 22.1289L3.01132 4.63609H18.9902L17.9591 22.1289H17.9582Z"
                    fill="black"
                  />
                  <path
                    d="M10.9998 6.84912C10.5399 6.84912 10.1675 7.22159 10.1675 7.68147V20.2593C10.1675 20.7192 10.5399 21.0917 10.9998 21.0917C11.4597 21.0917 11.8322 20.7192 11.8322 20.2593V7.68147C11.8322 7.22159 11.4597 6.84912 10.9998 6.84912Z"
                    fill="black"
                  />
                  <path
                    d="M13.8257 7.68147V20.2593C13.8257 20.7192 14.1981 21.0917 14.658 21.0917C15.1179 21.0917 15.4904 20.7192 15.4904 20.2593V7.68147C15.4904 7.22159 15.1179 6.84912 14.658 6.84912C14.1981 6.84912 13.8257 7.22159 13.8257 7.68147Z"
                    fill="black"
                  />
                  <path
                    d="M7.34162 6.84912C6.88174 6.84912 6.50928 7.22159 6.50928 7.68147V20.2593C6.50928 20.7192 6.88174 21.0917 7.34162 21.0917C7.8015 21.0917 8.17397 20.7192 8.17397 20.2593V7.68147C8.17397 7.22159 7.8015 6.84912 7.34162 6.84912Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className={classes.ranger}>
            <svg
              width="20"
              height="2"
              viewBox="0 0 20 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => decrementHandler(product.index)}
            >
              <path
                d="M1 1H19"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <span>{product.quantity}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => incrementHandler(product.index)}
            >
              <path
                d="M17.1 8.1H9.9V0.9C9.9 0.405 9.495 0 9 0C8.505 0 8.1 0.405 8.1 0.9V8.1H0.9C0.405 8.1 0 8.505 0 9C0 9.495 0.405 9.9 0.9 9.9H8.1V17.1C8.1 17.595 8.505 18 9 18C9.495 18 9.9 17.595 9.9 17.1V9.9H17.1C17.595 9.9 18 9.495 18 9C18 8.505 17.595 8.1 17.1 8.1Z"
                fill="black"
              />
            </svg>
          </div>
          <div className={classes.price}>
            <img src={ruppee} alt="ruppee" />
            <span>{product.quantity * product.price + ".00"}</span>
          </div>
        </div>
      ))}
      <div className={classes.orderAmount}>
        <h4>ORDER AMOUNT</h4>
        <div className={classes.price}>
          <img src={ruppee} alt="ruppee" />
          <span>{totalAmount + ".00"}</span>
        </div>
      </div>
      <div className={classes.discount}>
        <h4>DISCOUNT AMOUNT</h4>
        <div className={classes.price}>
          <img src={ruppee} alt="ruppee" />
          <span>0.00</span>
        </div>
      </div>
      <div className={classes.line} />
      <h4 className={classes.total}>TOTAL AMOUNT : Rs {totalAmount + ".00"}</h4>
      <button className={classes.proceed}>Proceed to checkout</button>
      <SimilarProducts />
      <HomeAppContainer />
      <Footer />
    </div>
  );
};

export default Cart;
