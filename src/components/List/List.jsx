import React, { useEffect, useState } from "react";
import "./list.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SelectFilter from "../SelectFilter/SelectFilter";
import CultureCard from "../CultureCard/CultureCard";
import { publicRequest } from "../../requestMethods";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";
import { tahun } from "../../utils/naming";

const List = ({ province, setProvince, isOpen, setIsOpen }) => {
    const [year, setYear] = useState("");
    const [inputSearch, setInputSearch] = useState("");
    const [list, setList] = useState([]);
    const [cultures, setCultures] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getAllProvinces = async () => {
            try {
                const res = await publicRequest.get(`/provinces`);
                setProvinces(res.data);
            } catch (err) {}
        };
        getAllProvinces();
    }, []);

    useEffect(() => {
        const getAllCultures = async () => {
            setIsLoading(true);
            try {
                const res = await publicRequest.get(`/cultures`);
                setList(res.data);
                setCultures(res.data);
                if (res) {
                    setIsLoading(false);
                }
            } catch (err) {}
        };
        getAllCultures();
    }, []);

    const reset = () => {
        setProvince("");
        setYear("");
        setInputSearch("");
    };

    useEffect(() => {
        const applyFilters = () => {
            let updatedList = cultures;

            if (year) {
                updatedList = updatedList.filter((item) => item.year === year);
            }
            if (province) {
                updatedList = updatedList.filter(
                    (item) => item.province._id === province
                );
            }
            if (inputSearch) {
                updatedList = updatedList.filter(
                    (item) =>
                        item.name
                            .toLowerCase()
                            .search(inputSearch.toLowerCase().trim()) !== -1
                );
            }
            setList(updatedList);
        };
        applyFilters();
    }, [year, province, inputSearch, cultures, isLoading]);

    console.log(isOpen);
    return (
        <div className={isOpen ? "list" : "list close"}>
            <div className="top">
                <CloseIcon
                    className="close-icon"
                    onClick={() => setIsOpen(false)}
                />
                <div className="search">
                    <input
                        type="text"
                        value={inputSearch}
                        onChange={(e) => setInputSearch(e.target.value)}
                        placeholder="Search..."
                    />
                    <SearchOutlinedIcon className="icon" />
                </div>
                <div className="filters">
                    <SelectFilter
                        options={provinces}
                        label="Province"
                        value={province}
                        setValue={setProvince}
                    />
                    <SelectFilter
                        options={tahun(2010, 2021)}
                        label="Year"
                        value={year}
                        setValue={setYear}
                    />

                    <div className="reset" onClick={reset}>
                        reset
                    </div>
                </div>
            </div>
            <div className="card-container">
                {isLoading ? (
                    <CircularProgress
                        color="primary"
                        size="2rem"
                        thickness={5}
                    />
                ) : list.length < 1 ? (
                    <div className="">Hasil pencarian tidak ditemukan</div>
                ) : (
                    list.map((culture) => <CultureCard culture={culture} />)
                )}
            </div>
        </div>
    );
};

export default List;
