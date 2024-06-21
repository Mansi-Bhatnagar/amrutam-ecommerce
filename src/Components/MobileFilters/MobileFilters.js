import { useState } from "react";
import SortModal from "../SortModal/SortModal";
import SortField from "../SortField/SortField";
import classes from "./MobileFilters.module.css";

const MobileFilters = () => {
  //States
  const [showConcernModal, setShowConcernModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  //Handlers
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
  const clearHandler = () => {
    setSelectedOption(null);
  };

  return (
    <div className={classes.mobileFilters}>
      <span onClick={showConcernModalHandler}>Concern</span>
      <div className={classes.line} />
      <span onClick={showCategoryModalHandler}>Category</span>

      {(showCategoryModal || showConcernModal) && (
        <div className={classes.bg} />
      )}
      {showConcernModal ? (
        <SortModal isOpen={showConcernModal} onClose={closeConcernModalhandler}>
          <div className={classes.container}>
            <div className={classes.dragHandle} />
            <div className={classes.header}>
              <h3>Sort by concern</h3>
              <button onClick={clearHandler}>Clear</button>
            </div>
            <SortField
              id={1}
              name={"Color Protection"}
              grpName={"Concern"}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            <SortField
              id={2}
              name={"Dry and Frizzy Hair"}
              grpName={"Concern"}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            <SortField
              id={3}
              name={"Shine & Luster"}
              grpName={"Concern"}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            <SortField
              id={4}
              name={"Hair Growth"}
              grpName={"Concern"}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            <SortField
              id={5}
              name={"Hair loss and thinning"}
              border={"none"}
              grpName={"Concern"}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
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
            <div className={classes.header}>
              <h3>Sort by category</h3>
              <button onClick={clearHandler}>Clear</button>
            </div>
            <SortField
              id={6}
              name={"Hair Care - Spa/Hair Mask"}
              grpName={"Category"}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            <SortField
              id={7}
              name={"Haire Care - Shampoo & Conditioner"}
              grpName={"Category"}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            <SortField
              id={8}
              name={"Hair Care - Hair Oils"}
              grpName={"Category"}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            <SortField
              id={9}
              name={"Hair Care - Hair Malt"}
              border={"none"}
              grpName={"Category"}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>
        </SortModal>
      ) : (
        ""
      )}
    </div>
  );
};

export default MobileFilters;
