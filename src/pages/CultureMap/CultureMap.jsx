import React, { useState } from "react";
import List from "../../components/List/List";
import MyMap from "../../components/MyMap/MyMap";
import "./culturemap.scss";

const CultureMap = () => {
    const [province, setProvince] = useState("");

    return (
        <div className="cultureMap">
            <List province={province} setProvince={setProvince} />
            <MyMap setProvince={setProvince} />
        </div>
    );
};

export default CultureMap;
