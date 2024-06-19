import highlight from "../../Assets/Images/highlight.png";
import classes from "./Highlight.module.css";

const Highlight = (props) => {
  return (
    <div className={classes.container}>
      <img src={highlight} alt="highlight" />
      <h4>{props.name}</h4>
    </div>
  );
};

export default Highlight;
