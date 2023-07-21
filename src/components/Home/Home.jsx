import style from "./Home.module.scss";
import Tutorial from "../../tutorial/Tutorial/Tutorial.jsx";

const Home = () => {
    return (
        <div className={style.container}>
            <section>
                <Tutorial/>
            </section>
            <section id="title1">
                <h1>title1</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
                    doloremque autem, quia, ab nihil voluptates, cumque aperiam
                    exercitationem quos doloribus voluptatem consequuntur. Quibusdam
                    officiis, voluptates voluptatum amet quidem dolorum quia.
                </p>
            </section>
            <section id="title2">
                <h1>title2</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
                    doloremque autem, quia, ab nihil voluptates, cumque aperiam
                    exercitationem quos doloribus voluptatem consequuntur. Quibusdam
                    officiis, voluptates voluptatum amet quidem dolorum quia.
                </p>
            </section>
            <section id="title3">
                <h1>title3</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
                    doloremque autem, quia, ab nihil voluptates, cumque aperiam
                    exercitationem quos doloribus voluptatem consequuntur. Quibusdam
                    officiis, voluptates voluptatum amet quidem dolorum quia.
                </p>
            </section>
            <section id="title4">
                <h1>title4</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
                    doloremque autem, quia, ab nihil voluptates, cumque aperiam
                    exercitationem quos doloribus voluptatem consequuntur. Quibusdam
                    officiis, voluptates voluptatum amet quidem dolorum quia.
                </p>
            </section>
        </div>
    );
};

export default Home;