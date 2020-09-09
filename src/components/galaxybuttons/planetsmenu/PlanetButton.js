import React from "react";
import "./planetbutton.css";
import planetList from "./planetList"
import { NavLink } from "react-router-dom";



function PlanetButton(props) {
    const planetMap = planetList.map((planetList) => {
        return (<div>
            <NavLink>
                <span className="hover-text" title={planetList.hoverText}>
                    <div className="galaxy-button ">
                        <div className="button-text">{planetList.buttontitle}</div>
                    </div>
                </span><br />
            </NavLink>
        </div>
        )
    }
    )

    return (<div className="planet-select flex-container">

        {planetMap}
    </div>)
}
export default PlanetButton;