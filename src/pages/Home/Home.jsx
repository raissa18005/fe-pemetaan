import React, { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <div className="left">
                <h1>
                    SIG PEMETAAN PERMAINAN RAKYAT <span>INDONESIA</span>
                </h1>
                <p>
                    MAPPIN merupakan website pemetaan permainan rakyat di
                    Indonesia. Pemetaan permainan disajikan dalam bentuk peta
                    Indonesia dengan pewarnaan klasifikasi jumlah permainan per
                    provinsi. Mulai mencari permainan dengan tekan tombol
                    berikut!
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
