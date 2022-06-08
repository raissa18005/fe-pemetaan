import React from "react";
import List from "../../components/List/List";
import MyMap from "../../components/MyMap/MyMap";
import Navbar from "../../components/Navbar/Navbar";
import "./culturemap.scss";

const CultureMap = () => {
    return (
        <div className="cultureMap">
            <List />
            <MyMap />
        </div>
    );
};

export default CultureMap;
