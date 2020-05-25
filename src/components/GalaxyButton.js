import React from "react";


const galaxyList = [
    {
        buttontitle: "Create Worlds",
        hoverText: "Dare to create wrlds with every dream unbound."
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
            <button className="galaxy-button" onMouseEnter={galaxyList.hoverText}>{galaxyList.buttontitle}</button>
        )
    }
    )

    return (<div>
        {galaxyMap}
    </div>)
}
export default GalaxyButton;