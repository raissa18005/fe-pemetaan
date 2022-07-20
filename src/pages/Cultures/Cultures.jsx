import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import cultures from "../../data/permainan.json";
// import provinces from "../../data/data2.json";
import "./cultures.scss";
import SelectFilter from "../../components/SelectFilter/SelectFilter";
import CultureCard from "../../components/CultureCard/CultureCard";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import { publicRequest } from "../../requestMethods";
import { tahun } from "../../utils/naming";

const Cultures = () => {
    const [province, setProvince] = useState("");
    const [year, setYear] = useState("");
    const [inputSearch, setInputSearch] = useState("");
    const [list, setList] = useState();
    const [page, setPage] = useState(1);
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

    const PER_PAGE = 9;
    const count = Math.ceil(list?.length / PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);

        p !== page && window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const offset = (page - 1) * PER_PAGE;
    const currentPageData = list?.slice(offset, offset + PER_PAGE);

    const years = [
        {
            id: 1,
            label: 2018,
            value: 2018,
        },
        {
            id: 2,
            label: 2019,
            value: 2019,
        },
    ];

    const reset = () => {
        setProvince("");
        setYear("");
        setInputSearch("");
    };

    useEffect(() => {
        setPage(1);
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
    }, [year, province, inputSearch, isLoading]);

    return (
        <div className="cultures">
            <div className="top">
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
                    {/* <SelectFilter answer={answer} setAnswer={setAnswer} /> */}
                </div>
            </div>

            {isLoading ? (
                <div className="load">
                    <CircularProgress
                        color="primary"
                        size="2rem"
                        thickness={5}
                    />
                </div>
            ) : list.length < 1 ? (
                <div className="notfound">Hasil pencarian tidak ditemukan</div>
            ) : (
                <>
                    <div className="card-container">
                        {currentPageData?.map((culture) => (
                            <CultureCard key={culture.id} culture={culture} />
                        ))}
                    </div>
                    <div className="pagination">
                        <Pagination
                            count={count}
                            page={page}
                            size="large"
                            onChange={handleChange}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default Cultures;
