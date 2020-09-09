import React from "react";
import SignInForm from "./signInForm";
import LibraryDrop from "./LibraryDrop";
import { NavLink } from "react-router-dom";

const tempName = "Jamison Stramer";
const tierLevel = "Developer";

function Header() {
    return (<div>
        <header>
            <NavLink to="/index">
                <img src="./images/mylogo.jpg" height="50px" width="50px" alt="Missing" />
            </NavLink>
            <div>
                <a className="index-headlink index-user" href="profile">{tempName}</a>
                <br />
                <a className="index-headlink " href="upgrader">{tierLevel}</a>
            </div>
            <SignInForm />
            <div>
                <a className="index-headlink " href="moreBooks">Buy Books</a>

                <LibraryDrop />
            </div>
        </header>
    </div>)
}
export default Header;