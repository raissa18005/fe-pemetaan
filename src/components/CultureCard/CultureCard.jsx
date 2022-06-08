import "./culturecard.scss";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const CultureCard = ({ culture }) => {
    return (
        <div className="card">
            <img
                src="https://cdn1-production-images-kly.akamaized.net/ZCLMBNZPCckx3xA2jai4dcsXWpo=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1228107/original/013923000_1462849258-20160510-Lomba-Adu-Gasing-yang-Memukau-di-Taiwan-Reuters-5.jpg"
                alt="permainan"
                srcset=""
            />
            <div className="info">
                <div className="info-top">
                    <div className="infos">
                        <CalendarTodayIcon className="icon" />
                        {culture.year ? culture.year : "-"}
                    </div>
                    <div className="infos">
                        <LocationOnIcon className="icon" />
                        {culture.province ? culture.province : "-"}
                    </div>
                </div>
                <a href="/">
                    <h1>{culture.title}</h1>
                </a>
                <p>{culture.desc.substring(0, 230)} ...</p>
                <div className="info-bottom">
                    <a className="button" href="/">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CultureCard;
