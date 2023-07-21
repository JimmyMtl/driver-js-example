import style from "./Navbar.module.scss"
import favicon from "../Items/favicon.svg"
import Tutorial from "../../tutorial/Tutorial/Tutorial.jsx";

const Navbar = () => {
    return (
        <nav role={"navigation"} className={style.container}>
            <a href="https://driverjs.com" className={style.link}>
                <img width={25} height={25} src={favicon} alt=""/>
                <span>Driver.js</span>
            </a>
            <Tutorial/>
        </nav>
    );
};

export default Navbar;