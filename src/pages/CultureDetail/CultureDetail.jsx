import React, { useState } from "react";
import "./culturedetail.scss";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Gallery from "../../components/Gallery/Gallery";

const CultureDetail = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    console.log(value);

    return (
        <div className="cultureDetail">
            <div className="stripe"></div>

            <div className="cultureDetail-container">
                <div className="heading">
                    <h1>Permainan Gasing</h1>
                    <div className="regnum">
                        <span>Nomor Registrasi :</span>
                        <span> 09123092142</span>
                    </div>
                    <div className="info-top">
                        <div className="infos">
                            <CalendarTodayIcon className="icon" />
                            2019
                            {/* {culture.year ? culture.year : "-"} */}
                        </div>
                        <div className="infos">
                            <LocationOnIcon className="icon" />
                            Jawa Barat
                            {/* {culture.province ? culture.province : "-"} */}
                        </div>
                        <div className="infos">
                            No. 09123123123
                            {/* {culture.province ? culture.province : "-"} */}
                        </div>
                        <div className="infos">
                            Tipe: Pencatatan
                            {/* {culture.province ? culture.province : "-"} */}
                        </div>
                    </div>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="Deskripsi" />
                            <Tab label="Foto" />
                            <Tab label="Video" />
                        </Tabs>
                    </Box>
                </div>
                {value === 0 ? (
                    <div className="description">
                        <div className="img-container">
                            <img
                                src="https://warisanbudaya.kemdikbud.go.id/dashboard/media/photos/foto_1483945898.jpg"
                                alt=""
                            />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officia minima libero, non distinctio tempora
                            quaerat consectetur nostrum praesentium repellendus
                            quibusdam omnis nulla aperiam magnam, explicabo,
                            atque cumque. Animi mollitia possimus officiis,
                            magnam reprehenderit aut deserunt asperiores
                            assumenda repudiandae culpa nemo itaque adipisci
                            laudantium nihil fugit, esse labore recusandae atque
                            hic debitis modi ipsam. Repellendus, nam sit,
                            corporis praesentium odit mollitia repudiandae
                            dolores illum exercitationem impedit unde architecto
                            eum quas rerum asperiores dolorem, itaque deleniti
                            ipsum? Impedit libero facere quisquam dolorum
                            laudantium sequi officiis a sunt, dignissimos unde
                            tempore nemo eos doloribus reprehenderit, itaque
                            iusto accusantium nobis exercitationem praesentium
                            nam, totam nihil vero repellendus! Dolorem, facilis
                            quae deleniti minus dolores eaque commodi repellat
                            totam! Tempore unde molestias non mollitia, iure quo
                            neque quasi voluptatum praesentium. Officia deserunt
                            eius provident voluptatem obcaecati esse quibusdam
                            dignissimos laborum beatae natus reprehenderit modi
                            quidem recusandae, dolores odio quia repellendus
                            reiciendis incidunt consequuntur numquam fugiat
                            perspiciatis nihil voluptatibus inventore. Explicabo
                            deserunt tenetur nobis quibusdam praesentium saepe
                            debitis fugiat fugit in id, quia dignissimos ut
                            expedita perferendis velit veniam laborum atque quae
                            eligendi obcaecati officia repellat! Iste assumenda
                            neque ducimus nostrum dicta. Animi tempore numquam
                            hic ratione illum ea! Dicta praesentium illum
                            sapiente, distinctio corrupti recusandae qui sit
                            ratione ab consequatur. Doloribus cumque, itaque
                            impedit sapiente sequi laboriosam quos quas, veniam
                            ad nisi numquam voluptatibus eligendi tenetur ullam
                            voluptatem voluptate? Aspernatur harum iusto
                            corrupti laudantium error eius similique corporis at
                            dolorum, facere magnam quo soluta alias laboriosam
                            voluptas id suscipit esse quos fugiat assumenda
                            laborum voluptatum. Natus id, accusantium sed
                            eveniet, quia quo tempore minus consequatur ut ipsa
                            cumque asperiores delectus nobis dolorum, ea illum.
                            Sed obcaecati nihil voluptatibus blanditiis
                            consectetur deleniti, sit quasi modi fugit accusamus
                            perferendis. Soluta dignissimos, vero veritatis
                            accusantium, distinctio sapiente porro optio nemo
                            rerum in quia sequi quae neque, dolore odit animi.
                        </p>
                    </div>
                ) : (
                    <Gallery />
                )}
            </div>
        </div>
    );
};

export default CultureDetail;
