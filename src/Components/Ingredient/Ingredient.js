import classes from "./Ingredient.module.css";

const Ingredient = (props) => {
  return (
    <div className={classes.container}>
      <h5>{props.name}</h5>
      <p>{props.desc}</p>
    </div>
  );
};

export default Ingredient;
