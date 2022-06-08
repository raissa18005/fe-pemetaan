import React from "react";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <div className="left">
                <h1>
                    SIG PEMETAAN PERMAINAN RAKYAT <span>INDONESIA</span>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque, fuga sit! Labore quaerat fuga veniam, velit qui quas
                    delectus inventore non. Earum velit numquam tenetur
                    obcaecati maxime reiciendis voluptate ab.
                </p>
                <a href="/map">
                    <button>Lihat Peta</button>
                </a>
            </div>
            <div className="right"></div>
        </div>
    );
};

export default Home;
