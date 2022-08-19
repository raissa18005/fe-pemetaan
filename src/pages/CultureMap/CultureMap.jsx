import React, { useState } from "react";
import List from "../../components/List/List";
import MyMap from "../../components/MyMap/MyMap";
import "./culturemap.scss";

const CultureMap = () => {
    const [province, setProvince] = useState("");
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="cultureMap">
            <List
                province={province}
                setProvince={setProvince}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
            />
            <MyMap
                setProvince={setProvince}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
            />
        </div>
    );
};

export default CultureMap;
