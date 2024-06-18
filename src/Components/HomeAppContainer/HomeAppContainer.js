import googlePlay from "../../Assets/Images/googlePlay.png";
import appStore from "../../Assets/Images/appStore.png";
import iPhone13 from "../../Assets/Images/iPhone13.png";
import classes from "./HomeAppContainer.module.css";

const HomeAppContainer = () => {
  return (
    <div className={classes.homeAppContainer}>
      <div className={classes.content}>
        <h2>Amrutam Home App</h2>
        <p>
          The Amrutam Home App is your one-stop app for all things Ayurveda!
          Apart from mimicking the significant characteristics of our website,
          this app offers a wide range of additional features.
        </p>
        <h3>
          Get a diet & lifestyle consultation with ayurvedic experts across the
          globe{" "}
        </h3>
        <h1>Get the App now</h1>
        <div>
          <img src={googlePlay} alt="google-play" />
          <img src={appStore} alt="app-store" />
        </div>
      </div>
      <div className={classes.phone}>
        <img src={iPhone13} alt="iPhone13" />
        <div className={classes.ellipse1} />
        <div className={classes.ellipse2} />
      </div>
    </div>
  );
};

export default HomeAppContainer;
