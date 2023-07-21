import style from "./Footer.module.scss"
import github from "../Items/github.svg"
import favicon from "../Items/favicon.svg";
import vitejs from "../Items/vitejs.svg";

const Footer = () => {
    return (
        <footer className={style.container}>
            <a className={style.link} href="https://github.com/JimmyMtl" target={"_blank"}>
                <img width={25} height={25} src={github} alt="Github Icon"/>
                <span>My Github</span>
            </a>
            <a href="https://driverjs.com" className={style.link} target={"_blank"}>
                <img width={25} height={25} src={favicon} alt=""/>
                <span>Driver.js</span>
            </a>
            <a href="https://vitejs.dev" className={style.link} target={"_blank"}>
                <img width={25} height={25} src={vitejs} alt=""/>
                <span>Vite.js</span>
            </a>
        </footer>
    );
};

export default Footer;