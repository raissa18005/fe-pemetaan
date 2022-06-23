import "./home.scss";
import pin from "../../images/pin.png";

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
            <div className="right">
                <img src={pin} alt="" srcset="" />
                {/* testing */}
                {/* <img
                    src="https://www.abundancethebook.com/wp-content/uploads/2019/07/Permainan-Tradisional-Indonesia-Congklak-1024x683.jpeg"
                    alt=""
                /> */}
            </div>
        </div>
    );
};

export default Home;
