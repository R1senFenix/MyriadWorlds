import React from "react";
import "./galaxybutton.css";
import { NavLink } from "react-router-dom";
import pic from "./images/sun-flare.webp";



const galaxyList = [
    {
        buttontitle: "Create Worlds",
        hoverText: "Dare to create worlds with every dream unbound.",
        path: "create-all"
    },
    {
        buttontitle: "Play Worlds",
        hoverText: "Discover new realities and fill them with your reknown.",
        path: "play-all"
    }
    ,
    {
        buttontitle: "Worlds' Community",
        hoverText: "Discuss your Adventures with friends both new and old.",
        path: "community"
    }
]

function GalaxyButton(props) {
    const galaxyMap = galaxyList.map((galaxyList) => {
        return (<div className="galaxy-button">
            <NavLink to={galaxyList.path}>
                <span className="hover-text" title={galaxyList.hoverText}>
                    <div >
                        <img className="galaxy-img" src={pic} alt="" />
                        <div className="gal-button-text">{galaxyList.buttontitle}</div>
                    </div>
                </span><br />
            </NavLink>
        </div>
        )
    }
    )

    return (<div className="galaxy-select flex-container">

        {galaxyMap}
    </div>)
}
export default GalaxyButton;