import {driver} from "driver.js";
import useTutorialSteps from "../TutorialSteps/TutorialSteps.jsx";
import 'driver.js/dist/driver.css';
import style from "./Tutorial.module.css";

const Tutorial = () => {
    const [steps] = useTutorialSteps();

    const showTutorial = (e) => {
        e.stopPropagation();
        const driverObject = driver({
            showProgress: true,
            doneBtnText: "Done",
            closeBtnText: "Close",
            keyboardControl: true,
            nextBtnText: "Next",
            prevBtnText: "Previous",

        })
        driverObject.setSteps(steps);
        driverObject.drive();
    }
    return (
        <button className={style.button} onClick={showTutorial}>Start Tutorial</button>
    );
};

export default Tutorial;