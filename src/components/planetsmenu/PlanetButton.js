import React from "react";
import "./planetbutton.css";
import planetList from "./planetList"



function PlanetButton(props) {
    const planetMap = planetList.map((planetList) => {
        return (<div>
            <span className="hover-text" title={planetList.hoverText}>
                <div className="galaxy-button "
                    onClick={(event) => {

                    }
                    }>
                    <div className="button-text">{planetList.buttontitle}</div>
                </div>
            </span><br />
        </div>
        )
    }
    )

    return (<div className="planet-select flex-container">

        {planetMap}
    </div>)
}
export default PlanetButton;