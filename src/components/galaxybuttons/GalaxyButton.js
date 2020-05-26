import React from "react";
import "./galaxybutton.css";


const galaxyList = [
    {
        buttontitle: "Create Worlds",
        hoverText: "Dare to create worlds with every dream unbound."
    },
    {
        buttontitle: "Play Worlds",
        hoverText: "Discover new realities and fill them with your reknown."

    }
    ,
    {
        buttontitle: "Worlds' Community",
        hoverText: "Discuss your Adventures with friends both new and old."

    }
]


function GalaxyButton(props) {
    const galaxyMap = galaxyList.map((galaxyList) => {
        return (
            <span className="hover-text" title={galaxyList.hoverText}>
                <div className="galaxy-button ">
                    <div className="button-text">{galaxyList.buttontitle}</div>
                </div>
            </span>
        )
    }
    )

    return (<div className="galaxy-select">
        {galaxyMap}
    </div>)
}
export default GalaxyButton;