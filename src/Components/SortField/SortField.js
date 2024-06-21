import classes from "./SortField.module.css";

const SortField = (props) => {
  return (
    <div className={classes.container} style={{ borderBottom: props.border }}>
      <label htmlFor={props.id}>{props.name}</label>
      <input
        type="radio"
        id={props.id}
        name={props.grpName}
        style={{ width: "16px", height: "16px" }}
        value={props.name}
        checked={props.selectedOption === props.name}
        onChange={() => props.setSelectedOption(props.name)}
      />
    </div>
  );
};

export default SortField;
