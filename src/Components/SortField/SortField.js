import { useState } from "react";
import classes from "./SortField.module.css";

const SortField = (props) => {
  //States
  const [select, setSelect] = useState();

  //Handlers
  const selectSortHandler = (id) => {
    setSelect(id);
  };
  return (
    <div
      className={classes.container}
      style={{ borderBottom: props.border }}
      onClick={() => selectSortHandler(props.id)}
    >
      <span>{props.name}</span>
      <div
        className={classes.radioBtn}
        style={{
          border: select === props.id ? "1.5px solid #41A647" : "",
        }}
      >
        {select === props.id ? <div className={classes.selected} /> : ""}
      </div>
    </div>
  );
};

export default SortField;
