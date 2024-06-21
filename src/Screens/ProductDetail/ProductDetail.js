import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterContainer from "../../Components/FilterContainer/FilterContainer";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Highlight from "../../Components/Highlight/Highlight";
import Ingredient from "../../Components/Ingredient/Ingredient";
import HomeAppContainer from "../../Components/HomeAppContainer/HomeAppContainer";
import UserReview from "../../Components/UserReview/UserReview";
import SimilarProducts from "../../Components/SimilarProducts/SimilarProducts";
import Doctor from "../../Components/Doctor/Doctor";
import product1 from "../../Assets/Images/product1.png";
import product2 from "../../Assets/Images/product2.png";
import product3 from "../../Assets/Images/product3.png";
import carouselArrow from "../../Assets/Images/carouselArrow.png";
import ruppee from "../../Assets/Images/ruppee.png";
import recipe from "../../Assets/Images/recipe.png";
import expert from "../../Assets/Images/expert.png";
import play from "../../Assets/Images/play.png";
import leftarrow from "../../Assets/Images/leftarrow.png";
import rightarrow from "../../Assets/Images/arrow.png";
import cartSuccess from "../../Assets/Images/cartSuccess.png";
import classes from "./ProductDetail.module.css";

const ProductDetail = () => {
  const navigate = useNavigate();

  const carouselImages = [
    { id: 0, src: product1 },
    { id: 1, src: product2 },
    { id: 2, src: product3 },
  ];

  //States
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [index, setIndex] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCart, setShowCart] = useState(false);

  //Handlers
  const nextImageHandler = () => {
    setActiveImage((prev) => (prev + 1) % 3);
  };
  const incrementHandler = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrementHandler = () => {
    setQuantity((prev) => (prev === 0 ? 0 : prev - 1));
  };
  const addToCartHandler = (type) => {
    if (type) {
      setShowCart(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setShowCart(true);
      }, 3000);
    }
    if (localStorage.getItem("amrutam")) {
      const arr = JSON.parse(localStorage.getItem("amrutam"));
      arr.push({ quantity: type ? 1 : quantity, price: 649.0, index: index });
      localStorage.setItem("amrutam", JSON.stringify(arr));
      setIndex((prev) => prev + 1);
    } else {
      localStorage.setItem(
        "amrutam",
        JSON.stringify([
          { quantity: type ? 1 : quantity, price: 649.0, index: index },
        ])
      );
      setIndex((prev) => prev + 1);
    }
  };
  const viewCartHandler = () => {
    navigate("/cart");
  };

  return (
    <div>
      <Header name={"Store"} show={true} />
      <FilterContainer />
      <div className={classes.contentContainer}>
        <div className={classes.carousel}>
          <div className={classes.activeImage}>
            <img src={carouselImages[activeImage]?.src} alt="product" />
            <img
              src={carouselArrow}
              alt="arrow"
              className={classes.carouselArrow}
              onClick={nextImageHandler}
            />
          </div>
          <div className={classes.allImages}>
            {carouselImages.map((item) => (
              <img
                key={item.id}
                src={item.src}
                alt="product"
                style={{ opacity: activeImage === item.id ? "100%" : "40%" }}
              />
            ))}
          </div>
        </div>
        <div className={classes.content}>
          <h3>Amrutam Kuntal Care Hair Spa | Do-It-Yourself Hair Treatment</h3>
          <div className={classes.rating}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.10329 0.816631C8.47013 0.0734626 9.52987 0.0734625 9.89671 0.816631L11.8576 4.78909C12.0031 5.08394 12.2843 5.2884 12.6096 5.33595L16.9962 5.97712C17.8161 6.09696 18.1429 7.1048 17.5493 7.68296L14.3768 10.773C14.1409 11.0027 14.0333 11.3339 14.0889 11.6584L14.8374 16.0226C14.9775 16.8396 14.12 17.4626 13.3864 17.0767L9.46545 15.0148C9.17407 14.8615 8.82593 14.8615 8.53455 15.0148L4.61363 17.0767C3.88 17.4626 3.02245 16.8396 3.16257 16.0226L3.91109 11.6584C3.96675 11.3339 3.85908 11.0027 3.62321 10.773L0.450678 7.68296C-0.142915 7.1048 0.183869 6.09696 1.00378 5.97712L5.39037 5.33595C5.71572 5.2884 5.99691 5.08394 6.14245 4.78909L8.10329 0.816631Z"
                fill="#F79624"
              />
            </svg>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.10329 0.816631C8.47013 0.0734626 9.52987 0.0734625 9.89671 0.816631L11.8576 4.78909C12.0031 5.08394 12.2843 5.2884 12.6096 5.33595L16.9962 5.97712C17.8161 6.09696 18.1429 7.1048 17.5493 7.68296L14.3768 10.773C14.1409 11.0027 14.0333 11.3339 14.0889 11.6584L14.8374 16.0226C14.9775 16.8396 14.12 17.4626 13.3864 17.0767L9.46545 15.0148C9.17407 14.8615 8.82593 14.8615 8.53455 15.0148L4.61363 17.0767C3.88 17.4626 3.02245 16.8396 3.16257 16.0226L3.91109 11.6584C3.96675 11.3339 3.85908 11.0027 3.62321 10.773L0.450678 7.68296C-0.142915 7.1048 0.183869 6.09696 1.00378 5.97712L5.39037 5.33595C5.71572 5.2884 5.99691 5.08394 6.14245 4.78909L8.10329 0.816631Z"
                fill="#F79624"
              />
            </svg>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.10329 0.816631C8.47013 0.0734626 9.52987 0.0734625 9.89671 0.816631L11.8576 4.78909C12.0031 5.08394 12.2843 5.2884 12.6096 5.33595L16.9962 5.97712C17.8161 6.09696 18.1429 7.1048 17.5493 7.68296L14.3768 10.773C14.1409 11.0027 14.0333 11.3339 14.0889 11.6584L14.8374 16.0226C14.9775 16.8396 14.12 17.4626 13.3864 17.0767L9.46545 15.0148C9.17407 14.8615 8.82593 14.8615 8.53455 15.0148L4.61363 17.0767C3.88 17.4626 3.02245 16.8396 3.16257 16.0226L3.91109 11.6584C3.96675 11.3339 3.85908 11.0027 3.62321 10.773L0.450678 7.68296C-0.142915 7.1048 0.183869 6.09696 1.00378 5.97712L5.39037 5.33595C5.71572 5.2884 5.99691 5.08394 6.14245 4.78909L8.10329 0.816631Z"
                fill="#F79624"
              />
            </svg>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.10329 0.816631C8.47013 0.0734626 9.52987 0.0734625 9.89671 0.816631L11.8576 4.78909C12.0031 5.08394 12.2843 5.2884 12.6096 5.33595L16.9962 5.97712C17.8161 6.09696 18.1429 7.1048 17.5493 7.68296L14.3768 10.773C14.1409 11.0027 14.0333 11.3339 14.0889 11.6584L14.8374 16.0226C14.9775 16.8396 14.12 17.4626 13.3864 17.0767L9.46545 15.0148C9.17407 14.8615 8.82593 14.8615 8.53455 15.0148L4.61363 17.0767C3.88 17.4626 3.02245 16.8396 3.16257 16.0226L3.91109 11.6584C3.96675 11.3339 3.85908 11.0027 3.62321 10.773L0.450678 7.68296C-0.142915 7.1048 0.183869 6.09696 1.00378 5.97712L5.39037 5.33595C5.71572 5.2884 5.99691 5.08394 6.14245 4.78909L8.10329 0.816631Z"
                fill="#F79624"
              />
            </svg>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.10329 0.816631C8.47013 0.0734626 9.52987 0.0734625 9.89671 0.816631L11.8576 4.78909C12.0031 5.08394 12.2843 5.2884 12.6096 5.33595L16.9962 5.97712C17.8161 6.09696 18.1429 7.1048 17.5493 7.68296L14.3768 10.773C14.1409 11.0027 14.0333 11.3339 14.0889 11.6584L14.8374 16.0226C14.9775 16.8396 14.12 17.4626 13.3864 17.0767L9.46545 15.0148C9.17407 14.8615 8.82593 14.8615 8.53455 15.0148L4.61363 17.0767C3.88 17.4626 3.02245 16.8396 3.16257 16.0226L3.91109 11.6584C3.96675 11.3339 3.85908 11.0027 3.62321 10.773L0.450678 7.68296C-0.142915 7.1048 0.183869 6.09696 1.00378 5.97712L5.39037 5.33595C5.71572 5.2884 5.99691 5.08394 6.14245 4.78909L8.10329 0.816631Z"
                fill="#F79624"
              />
            </svg>
            <span>(204 reviews)</span>
          </div>
          <div className={classes.cost}>
            <img src={ruppee} alt="ruppee" />
            <span>649</span>
          </div>
          <div className={classes.tags}>
            <div>
              <span>200 ml</span>
            </div>
            <div>
              <span>100 ml</span>
            </div>
            <div>
              <span>Pack of 3</span>
            </div>
          </div>
          <div className={classes.options}>
            <div className={classes.ranger}>
              <svg
                width="20"
                height="2"
                viewBox="0 0 20 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={decrementHandler}
              >
                <path
                  d="M1 1H19"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span>{quantity}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={incrementHandler}
              >
                <path
                  d="M17.1 8.1H9.9V0.9C9.9 0.405 9.495 0 9 0C8.505 0 8.1 0.405 8.1 0.9V8.1H0.9C0.405 8.1 0 8.505 0 9C0 9.495 0.405 9.9 0.9 9.9H8.1V17.1C8.1 17.595 8.505 18 9 18C9.495 18 9.9 17.595 9.9 17.1V9.9H17.1C17.595 9.9 18 9.495 18 9C18 8.505 17.595 8.1 17.1 8.1Z"
                  fill="black"
                />
              </svg>
            </div>
            <button onClick={() => addToCartHandler(0)}>Add to cart</button>
          </div>
          <div className={classes.info}>
            <p>
              Amrutam's Kuntal Care Do-It-Yourself Hair Spa is an ayurvedic
              marvel filled to the brim with revitalizing herbs and essential
              oils like Eucalyptus oil, Triphala, Balchhad and Bhringraj.{" "}
            </p>
            <p>
              These Ayurvedic ingredients when fused together make a potent
              dollop that nourishes dry and frizzy hair making it soft and
              bouncy! This spa treatment revitalizes the roots, promotes growth,
              provides shine, coats hair with a moisturizing layer and is the
              best stress reliever!
            </p>
            <p>It's time to bring spa home and unwind.</p>
          </div>
          <div className={classes.separation} />
          <div className={classes.highlights}>
            <div className={classes.heading}>
              <img src={recipe} alt="recipe" />
              <h4>Product Highlights</h4>
            </div>
            <div className={classes.highlightContainer}>
              <Highlight name={"Helps with Dry, Frizzy Hair"} />
              <Highlight name={"Relaxes the scalp, improves hair health"} />
              <Highlight name={"Makes the hair smooth and shiny"} />
              <Highlight name={"Reduces hairfall, repairs damaged hair"} />
            </div>
          </div>
          <div className={classes.separation} />
          <div className={classes.ingredients}>
            <div className={classes.heading}>
              <img src={recipe} alt="recipe" />
              <h4>Key Ingredients</h4>
            </div>
            <div className={classes.ingredientContainer}>
              <Ingredient
                name={"Triphala"}
                desc={"Naturally Repairs and strengthens hair"}
              />
              <Ingredient
                name={"Triphala"}
                desc={"Naturally Repairs and strengthens hair"}
              />
              <Ingredient
                name={"Triphala"}
                desc={"Naturally Repairs and strengthens hair"}
              />
              <Ingredient
                name={"Triphala"}
                desc={"Naturally Repairs and strengthens hair"}
              />
            </div>
          </div>
          <div className={classes.separation} />
          <div className={classes.instructions}>
            <h4>How to use</h4>
            <div className={classes.wrapper}>
              <p>
                Mix one or tow tablespoons of Herbal Child Care Malt with milk
                or 100-200ml warm water and then consume twice a day or consult
                our Ayurvedic Expert to find the right Ayurvedic recipe for you.
              </p>
            </div>
          </div>
          <div className={classes.separation} />
          <div className={classes.genInstructions}>
            <h4>General Instructions</h4>
            <div className={classes.wrapper}>
              <p>
                Store in a cool and dry palce away from direct sunlight. Not
                advisable for diabetic patients
              </p>
            </div>
          </div>
          <div className={classes.separation} />
          <div className={classes.questions}>
            <h4>Commonly Asked Questions</h4>
            <div className={classes.wrapper} style={{ marginBottom: "12px" }}>
              <h5>
                Who should be using Amrutam Child Care Malt | Herbal Supplement
                for Child Care
              </h5>
              <p>
                This product is ideal for growing babies and kids to nurture
                their health in a holistic manner
              </p>
            </div>
            <div className={`${classes.wrapper} ${classes.ques2}`}>
              <h5>
                Why choose Amrutam Child Care Malt | Herbal Supplement for Child
                Care
              </h5>
              <p>
                Amrutam's Child Care Malt helps improve immunity and is useful
                in enhancing vitality and vigor in children.
                <br /> This 100% natural Ayurvedic jam is extremely effective in
                fighting chronic diseases.
                <br /> Giving your little one Amrutam's Child Care Malt daily
                will help them Improve their appetite and digestion.
                <br /> It is useful in treating anemia, general debility and
                maintaining a healthy weight. <br />
                100% Natural and Ayurvedic
                <br /> PETA certified cruelty-free <br />
                Hand-picked and ethically sourced ingredients <br />
                AYUSH certified and US FDA approved
              </p>
            </div>
          </div>
          <div className={classes.separation} />
          <div className={classes.video}>
            <h5>Trust the voice</h5>
            <img src={expert} alt="expert" />
            <img src={play} alt="play" className={classes.play} />
          </div>
        </div>
      </div>
      <div className={classes.separation} />
      <div className={classes.reviews}>
        <h3>Reviews and Ratings</h3>
        <div className={classes.reviewContainer}>
          <div className={classes.s1}>
            <h2>5.0</h2>
            <div>
              <div className={classes.stars}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10329 0.816631C8.47013 0.0734626 9.52987 0.0734625 9.89671 0.816631L11.8576 4.78909C12.0031 5.08394 12.2843 5.2884 12.6096 5.33595L16.9962 5.97712C17.8161 6.09696 18.1429 7.1048 17.5493 7.68296L14.3768 10.773C14.1409 11.0027 14.0333 11.3339 14.0889 11.6584L14.8374 16.0226C14.9775 16.8396 14.12 17.4626 13.3864 17.0767L9.46545 15.0148C9.17407 14.8615 8.82593 14.8615 8.53455 15.0148L4.61363 17.0767C3.88 17.4626 3.02245 16.8396 3.16257 16.0226L3.91109 11.6584C3.96675 11.3339 3.85908 11.0027 3.62321 10.773L0.450678 7.68296C-0.142915 7.1048 0.183869 6.09696 1.00378 5.97712L5.39037 5.33595C5.71572 5.2884 5.99691 5.08394 6.14245 4.78909L8.10329 0.816631Z"
                    fill="#F79624"
                  />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10329 0.816631C8.47013 0.0734626 9.52987 0.0734625 9.89671 0.816631L11.8576 4.78909C12.0031 5.08394 12.2843 5.2884 12.6096 5.33595L16.9962 5.97712C17.8161 6.09696 18.1429 7.1048 17.5493 7.68296L14.3768 10.773C14.1409 11.0027 14.0333 11.3339 14.0889 11.6584L14.8374 16.0226C14.9775 16.8396 14.12 17.4626 13.3864 17.0767L9.46545 15.0148C9.17407 14.8615 8.82593 14.8615 8.53455 15.0148L4.61363 17.0767C3.88 17.4626 3.02245 16.8396 3.16257 16.0226L3.91109 11.6584C3.96675 11.3339 3.85908 11.0027 3.62321 10.773L0.450678 7.68296C-0.142915 7.1048 0.183869 6.09696 1.00378 5.97712L5.39037 5.33595C5.71572 5.2884 5.99691 5.08394 6.14245 4.78909L8.10329 0.816631Z"
                    fill="#F79624"
                  />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10329 0.816631C8.47013 0.0734626 9.52987 0.0734625 9.89671 0.816631L11.8576 4.78909C12.0031 5.08394 12.2843 5.2884 12.6096 5.33595L16.9962 5.97712C17.8161 6.09696 18.1429 7.1048 17.5493 7.68296L14.3768 10.773C14.1409 11.0027 14.0333 11.3339 14.0889 11.6584L14.8374 16.0226C14.9775 16.8396 14.12 17.4626 13.3864 17.0767L9.46545 15.0148C9.17407 14.8615 8.82593 14.8615 8.53455 15.0148L4.61363 17.0767C3.88 17.4626 3.02245 16.8396 3.16257 16.0226L3.91109 11.6584C3.96675 11.3339 3.85908 11.0027 3.62321 10.773L0.450678 7.68296C-0.142915 7.1048 0.183869 6.09696 1.00378 5.97712L5.39037 5.33595C5.71572 5.2884 5.99691 5.08394 6.14245 4.78909L8.10329 0.816631Z"
                    fill="#F79624"
                  />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10329 0.816631C8.47013 0.0734626 9.52987 0.0734625 9.89671 0.816631L11.8576 4.78909C12.0031 5.08394 12.2843 5.2884 12.6096 5.33595L16.9962 5.97712C17.8161 6.09696 18.1429 7.1048 17.5493 7.68296L14.3768 10.773C14.1409 11.0027 14.0333 11.3339 14.0889 11.6584L14.8374 16.0226C14.9775 16.8396 14.12 17.4626 13.3864 17.0767L9.46545 15.0148C9.17407 14.8615 8.82593 14.8615 8.53455 15.0148L4.61363 17.0767C3.88 17.4626 3.02245 16.8396 3.16257 16.0226L3.91109 11.6584C3.96675 11.3339 3.85908 11.0027 3.62321 10.773L0.450678 7.68296C-0.142915 7.1048 0.183869 6.09696 1.00378 5.97712L5.39037 5.33595C5.71572 5.2884 5.99691 5.08394 6.14245 4.78909L8.10329 0.816631Z"
                    fill="#F79624"
                  />
                </svg>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10329 0.816631C8.47013 0.0734626 9.52987 0.0734625 9.89671 0.816631L11.8576 4.78909C12.0031 5.08394 12.2843 5.2884 12.6096 5.33595L16.9962 5.97712C17.8161 6.09696 18.1429 7.1048 17.5493 7.68296L14.3768 10.773C14.1409 11.0027 14.0333 11.3339 14.0889 11.6584L14.8374 16.0226C14.9775 16.8396 14.12 17.4626 13.3864 17.0767L9.46545 15.0148C9.17407 14.8615 8.82593 14.8615 8.53455 15.0148L4.61363 17.0767C3.88 17.4626 3.02245 16.8396 3.16257 16.0226L3.91109 11.6584C3.96675 11.3339 3.85908 11.0027 3.62321 10.773L0.450678 7.68296C-0.142915 7.1048 0.183869 6.09696 1.00378 5.97712L5.39037 5.33595C5.71572 5.2884 5.99691 5.08394 6.14245 4.78909L8.10329 0.816631Z"
                    fill="#F79624"
                  />
                </svg>
              </div>
              <span>Based on 20 reviews</span>
            </div>
          </div>
          <div className={classes.mobileVis}>
            <UserReview />
            <UserReview />
          </div>
          <div className={classes.s2}>
            <div>
              <span>See more reviews</span>
            </div>
            <div>
              <span>Write a review</span>
            </div>
          </div>
        </div>
        <div className={classes.desktopVis}>
          <UserReview />
          <UserReview />
        </div>
      </div>
      <div className={classes.separation} />
      <SimilarProducts />
      <div className={classes.separation} />
      <div className={classes.doctors}>
        <h4>Meet our Experts</h4>
        <div className={classes.doctorContainer}>
          <div className={classes.arrowContainer}>
            <img src={leftarrow} alt="left-arrow" />
          </div>
          <Doctor />
          <Doctor />
          <Doctor />
          <div className={classes.arrowContainer}>
            <img src={rightarrow} alt="right-arrow" />
          </div>
        </div>
        <div className={classes.circles}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="#3A643B" />
          </svg>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="#C3C3C3" />
          </svg>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="#C3C3C3" />
          </svg>
        </div>
        <button className={classes.moreBtn}>
          <span>Find more experts</span>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 13L7 7L1 1"
              stroke="#3A643B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className={classes.bottomMenu}>
        <div>
          <div>
            <img src={ruppee} alt="ruppee" />
            <h5>649</h5>
          </div>
          <span>200 ml</span>
        </div>
        <button onClick={() => addToCartHandler(1)}>Add to cart</button>
      </div>
      {showSuccess ? (
        <div className={classes.addedSuccess}>
          <img src={cartSuccess} alt="success" />
          <span>Item added to cart</span>
        </div>
      ) : (
        ""
      )}
      {showCart ? (
        <div className={classes.viewCart}>
          <div className={classes.infoP1}>
            <img src={recipe} alt="recipe" />
            <div className={classes.infoP2}>
              <h5>Proceed to Checkout</h5>
              <div className={classes.infoP3}>
                <span>1 item</span>
                <svg
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2" cy="2" r="2" fill="white" />
                </svg>
                <div>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 1.5H9"
                      stroke="#FAFAFA"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 3.99219H9"
                      stroke="#FAFAFA"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 6.50781L7.25 10.5078"
                      stroke="#FAFAFA"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 6.50781H4.5"
                      stroke="#FAFAFA"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.5 6.5C7.8335 6.5 7.8335 1.5 4.5 1.5"
                      stroke="#FAFAFA"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>649</span>
                </div>
              </div>
            </div>
          </div>
          <button onClick={viewCartHandler}>View Cart</button>
        </div>
      ) : (
        ""
      )}
      <HomeAppContainer />
      <Footer />
    </div>
  );
};

export default ProductDetail;
