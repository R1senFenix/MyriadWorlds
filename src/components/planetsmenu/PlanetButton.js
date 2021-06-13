import React from "react";
import "./planetbutton.css";
import planetList from "./planetList"
import { NavLink } from "react-router-dom";
import pic from "./images/mercury_story_.jpg";



function PlanetButton(props) {
    const planetMap = planetList.map((planetList) => {
        return (<div className="planet-button">
            <NavLink to={planetList.path}>
                <span className="hover-text" title={planetList.hoverText}>
                    <div >
                        <img className="planet-img" src={pic} alt="" />
                        <div className="planet-button-text">{planetList.buttontitle}</div>
                    </div>
                </span><br />
            </NavLink>
        </div>
        )
    }
    )

    return (<div className="flex-container">

        {planetMap}
    </div>)
}
export default PlanetButton;