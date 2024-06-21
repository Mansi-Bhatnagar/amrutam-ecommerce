import doctor from "../../Assets/Images/doctor.png";
import classes from "./Doctor.module.css";

const Doctor = () => {
  return (
    <div className={classes.container}>
      <img src={doctor} alt="doctor" />
      <div className={classes.rating}>
        <span>4.5</span>
        <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.854 16.3333L5.20817 10.4792L0.666504 6.54167L6.6665 6.02083L8.99984 0.5L11.3332 6.02083L17.3332 6.54167L12.7915 10.4792L14.1457 16.3333L8.99984 13.2292L3.854 16.3333Z"
            fill="#EFDA3B"
          />
        </svg>
      </div>
      <h3 className={classes.name}>Dr. Vaishali Sharma</h3>
      <h4 className={classes.desc}>Ayurveda Practitioner (BAMS, MD)</h4>
      <div className={classes.experience}>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.5005 10.0016V16.0016M22.5005 10.0016L12.5005 5.00159L2.50049 10.0016L12.5005 15.0016L22.5005 10.0016Z"
            stroke="#3A643B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 12V17C9.5 20 15.5 20 18.5 17V12"
            stroke="#3A643B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h5>25 years of experience</h5>
      </div>
      <div className={classes.specialization}>
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.50017 13.6673L14.1668 7.00065C14.4783 6.69537 14.7263 6.33136 14.8962 5.92967C15.0662 5.52798 15.1548 5.09658 15.157 4.66042C15.1592 4.22426 15.0749 3.79198 14.9091 3.3886C14.7432 2.98521 14.4989 2.61871 14.1905 2.3103C13.8821 2.00188 13.5156 1.75766 13.1122 1.59177C12.7088 1.42587 12.2766 1.34159 11.8404 1.34379C11.4042 1.34599 10.9728 1.43464 10.5712 1.6046C10.1695 1.77456 9.80545 2.02247 9.50017 2.33399L2.8335 9.00065C2.52198 9.30594 2.27408 9.66995 2.10411 10.0716C1.93415 10.4733 1.84551 10.9047 1.8433 11.3409C1.8411 11.7771 1.92538 12.2093 2.09128 12.6127C2.25718 13.0161 2.50139 13.3826 2.80981 13.691C3.11823 13.9994 3.48472 14.2436 3.88811 14.4095C4.2915 14.5754 4.72377 14.6597 5.15993 14.6575C5.59609 14.6553 6.02749 14.5667 6.42918 14.3967C6.83087 14.2267 7.19488 13.9788 7.50017 13.6673Z"
            stroke="#3A643B"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.1665 5.66663L10.8332 10.3333"
            stroke="#3A643B"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h5>Skin Specialist</h5>
      </div>
      <div className={classes.btn}>Book a session</div>
    </div>
  );
};

export default Doctor;
