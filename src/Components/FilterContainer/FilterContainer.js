import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Filter from "../Filter/Filter";
import Product from "../Product/Product";
import SortField from "../SortField/SortField";
import all from "../../Assets/Images/all.png";
import hair from "../../Assets/Images/hair.png";
import skin from "../../Assets/Images/skin.png";
import digestion from "../../Assets/Images/digestion.png";
import bones from "../../Assets/Images/bones.png";
import immunity from "../../Assets/Images/immunity1.png";
import more from "../../Assets/Images/more.png";
import bestsellerProduct from "../../Assets/Images/bestsellerProduct.png";

import classes from "./FilterContainer.module.css";

const FilterContainer = () => {
  const location = useLocation();

  //States
  const [moreFilters, showMoreFilters] = useState(false);
  const [size, setSize] = useState();

  //Handlers
  const moreFilterHandler = () => {
    showMoreFilters((prev) => !prev);
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
    <>
      <div
        className={classes.filterContainer}
        style={{ display: size ? "none" : "flex" }}
      >
        <Filter src={all} name={"All"} width={"33px"} height={"28px"} />
        <Filter src={hair} name={"Hair"} width={"78px"} height={"78px"} />
        <Filter src={skin} name={"Skin"} width={"40.37px"} height={"39px"} />
        <Filter
          src={digestion}
          name={"Digestion"}
          width={"41.86px"}
          height={"37px"}
        />
        <Filter src={bones} name={"Bones"} width={"35.29px"} height={"41px"} />
        <Filter
          src={immunity}
          name={"Immunity"}
          width={"84px"}
          height={"84px"}
        />
        <Filter
          src={more}
          name={"More"}
          width={"10px"}
          height={"18px"}
          onClick={moreFilterHandler}
        />
      </div>
      {moreFilters ? (
        <div className={classes.allFilters}>
          <div className={classes.sec1}>
            <div>
              <h4>Sort by concern</h4>
              <SortField id={1} name={"Color Protection"} grpName={"Concern"} />
              <SortField
                id={2}
                name={"Dry and Frizzy Hair"}
                grpName={"Concern"}
              />
              <SortField id={3} name={"Shine & Luster"} grpName={"Concern"} />
              <SortField id={4} name={"Hair Growth"} grpName={"Concern"} />
              <SortField
                id={5}
                name={"Hair loss and thinning"}
                border={"none"}
                grpName={"Concern"}
              />
            </div>
            <div>
              <h4>Sort by category</h4>
              <SortField
                id={6}
                name={"Hair Care - Spa/Hair Mask"}
                grpName={"Category"}
              />
              <SortField
                id={7}
                name={"Haire Care - Shampoo & Conditioner"}
                grpName={"Category"}
              />
              <SortField
                id={8}
                name={"Hair Care - Hair Oils"}
                grpName={"Category"}
              />
              <SortField
                id={9}
                name={"Hair Care - Hair Malt"}
                border={"none"}
                grpName={"Category"}
              />
            </div>
            <div className={classes.line} />
          </div>
          <div className={classes.sec2}>
            <Product
              src={bestsellerProduct}
              name={
                "Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair"
              }
              cost={"649.00"}
              amount={"200ml"}
              rating={"52"}
              imageWidth={"238px"}
              imageHeight={"269px"}
              nameSize={"16px"}
              infoSize={"14px"}
              inline={"inline-block"}
            />
            <div className={classes.bestseller}>
              <span>Bestseller</span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FilterContainer;
