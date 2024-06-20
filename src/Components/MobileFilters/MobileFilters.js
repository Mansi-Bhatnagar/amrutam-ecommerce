import { useState } from "react";
import SortModal from "../SortModal/SortModal";
import SortField from "../SortField/SortField";
import classes from "./MobileFilters.module.css";

const MobileFilters = () => {
  const [showConcernModal, setShowConcernModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const showConcernModalHandler = () => {
    setShowConcernModal((prev) => !prev);
  };
  const showCategoryModalHandler = () => {
    setShowCategoryModal((prev) => !prev);
  };
  const closeConcernModalhandler = () => {
    setShowConcernModal(false);
  };
  const closeCategoryModalhandler = () => {
    setShowCategoryModal(false);
  };
  return (
    <div className={classes.mobileFilters}>
      <span onClick={showConcernModalHandler}>Concern</span>
      <div className={classes.line} />
      <span onClick={showCategoryModalHandler}>Category</span>
      {showConcernModal ? (
        <SortModal isOpen={showConcernModal} onClose={closeConcernModalhandler}>
          <div className={classes.container}>
            <div className={classes.dragHandle} />
            <h3>Sort by concern</h3>
            <SortField id={1} name={"Color Protection"} />
            <SortField id={2} name={"Dry and Frizzy Hair"} />
            <SortField id={3} name={"Shine & Luster"} />
            <SortField id={4} name={"Hair Growth"} />
            <SortField id={5} name={"Hair loss and thinning"} border={"none"} />
          </div>
        </SortModal>
      ) : (
        ""
      )}
      {showCategoryModal ? (
        <SortModal
          isOpen={showCategoryModal}
          onClose={closeCategoryModalhandler}
        >
          <div className={classes.container}>
            <div className={classes.dragHandle} />
            <h3>Sort by category</h3>
            <SortField id={6} name={"Hair Care - Spa/Hair Mask"} />
            <SortField id={7} name={"Haire Care - Shampoo & Conditioner"} />
            <SortField id={8} name={"Hair Care - Hair Oils"} />
            <SortField id={9} name={"Hair Care - Hair Malt"} border={"none"} />
          </div>
        </SortModal>
      ) : (
        ""
      )}
    </div>
  );
};

export default MobileFilters;
