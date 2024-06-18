import classes from "./Filter.module.css";
const Filter = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <img
          src={props.src}
          alt={props.name}
          style={{ width: `${props.width}`, height: `${props.height}` }}
        />
      </div>
      <span>{props.name}</span>
    </div>
  );
};

export default Filter;
