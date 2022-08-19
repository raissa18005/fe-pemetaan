import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import { publicRequest } from "../../requestMethods";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "./dynamicmap.scss";

const DynamicMap = () => {
    const [provinces, setProvinces] = useState([]);
    const [province, setProvince] = useState("");
    const [nilai, setNilai] = useState("");
    const [inputValue, setInputValue] = useState(0.8);
    const [calc, setCalc] = useState({});
    const [step, setStep] = useState(1);

    useEffect(() => {
        const getAllData = async () => {
            try {
                const totalData = await publicRequest.get(`/cultures/count`);
                const provinceData = await publicRequest.get(`/provinces`);

                setProvinces(
                    mergeProvincesTotal(provinceData.data, totalData.data)
                );
            } catch (err) {}
        };
        getAllData();
    }, []);
    const getCalc = async (inputValue) => {
        try {
            const calcData = await publicRequest.get(
                `/cultures/calculate?ref=${inputValue}`
            );
            setCalc(calcData.data);
        } catch (err) {}
    };

    const findId = (val, totalData) => {
        let temp = totalData.filter((item) => item._id === val);
        return temp[0];
    };

    const mergeProvincesTotal = (val, totalData) => {
        const test = val?.map((province) => {
            const totalTemp = findId(province._id, totalData);

            return {
                ...province,
                geojson: {
                    ...province.geojson,
                    properties: {
                        ...province.geojson.properties,
                        provinceId: totalTemp?._id || "",
                        total: totalTemp?.count || 0,
                    },
                },
            };
        });
        return test;
    };

    const countryStyle = {
        color: "black",
        weight: 1,
        fillOpacity: 0.3,
    };

    const onEachCountry = (country, layer) => {
        if (country.properties.total) {
            if (country.properties.total >= calc.high) {
                layer.options.fillColor = "green";
            } else if (country.properties.total <= calc.low) {
                layer.options.fillColor = "red";
            } else {
                layer.options.fillColor = "yellow";
            }
        }

        layer.on("click", function (e) {
            setProvince(country.properties.provinceId);
        });
        layer.on("mouseover", function (e) {
            e.target.setStyle({
                fillOpacity: 0.7,
            });
        });
        layer.on("mouseout", function (e) {
            e.target.setStyle({
                fillOpacity: 0.3,
            });
        });
    };

    const showMap = () => {
        setStep(2);
        setNilai(inputValue);
        getCalc(inputValue);
    };

    return (
        <div className="dynamicMap">
            {step === 1 && (
                <div className="nilai-container">
                    <form>
                        <div className="form-input">
                            <label htmlFor="">Masukkan Nilai Acuan (n)</label>
                            <input
                                type="number"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                        </div>
                        <button onClick={showMap}>Lihat Peta</button>
                    </form>
                </div>
            )}
            {step === 2 && (
                <>
                    <MapContainer
                        center={[0.7893, 113.9213]}
                        zoom={5}
                        scrollWheelZoom={true}
                        style={{ height: "100%", zIndex: 1 }}
                    >
                        {provinces.length > 0 && calc.high && (
                            <>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <GeoJSON
                                    style={countryStyle}
                                    data={provinces.map((map) => map.geojson)}
                                    onEachFeature={onEachCountry}
                                />
                            </>
                        )}

                        {provinces.map((data) => (
                            <Marker
                                position={[data.lat, data.long]}
                                icon={
                                    new Icon({
                                        iconUrl: markerIconPng,
                                        iconSize: [25, 41],
                                        iconAnchor: [12, 41],
                                    })
                                }
                                eventHandlers={{
                                    click: (e) => {
                                        setProvince(
                                            data.geojson.properties.provinceId
                                        ); // will print 'FooBar' in console
                                    },
                                }}
                            >
                                <Popup>
                                    <div className="info">
                                        <b>{data.name}</b>
                                        <p>
                                            {"Jumlah Permainan Rakyat : " +
                                                data.geojson.properties.total}
                                        </p>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                    {calc.high && (
                        <div className="legend">
                            <div className="title">Klasifikasi</div>
                            <div className="subtitle">
                                (Jumlah permainan per provinsi)
                            </div>
                            <div className="colorInfo">
                                <div
                                    className="color"
                                    style={{ background: "green" }}
                                ></div>
                                <div>
                                    {" > " +
                                        Math.floor(calc.high) +
                                        " (Jumlah Tinggi)"}
                                </div>
                            </div>
                            <div className="colorInfo">
                                <div
                                    className="color"
                                    style={{ background: "yellow" }}
                                ></div>
                                <div>
                                    {Math.floor(calc.low) +
                                        " - " +
                                        Math.floor(calc.high) +
                                        " (Jumlah Sedang)"}
                                </div>
                            </div>
                            <div className="colorInfo">
                                <div
                                    className="color"
                                    style={{ background: "red" }}
                                ></div>
                                <div>
                                    {" < " +
                                        Math.floor(calc.low) +
                                        " (Jumlah Sedikit)"}
                                </div>
                            </div>
                            <div className="provInfo">
                                Provinsi tinggi : {calc.highProvince}
                            </div>
                            <div className="provInfo">
                                Provinsi sedang : {calc.midProvince}
                            </div>
                            <div className="provInfo">
                                Provinsi sedikit : {calc.lowProvince}
                            </div>
                            <div className="provInfo">
                                Nilai Acuan : {calc.n}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default DynamicMap;
