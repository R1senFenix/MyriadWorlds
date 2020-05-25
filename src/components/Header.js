import React from "react";

function Header() {
    return (<div>
        <header>
            <a id="logo" href="index.html"        >
                <img src="./images/mylogo.jpg" height="50px" width="50px" alt="Missing" />
            </a>
            <form id="signIn">
                <h5>Sign In</h5>
                <label for="firstName">First Name:</label>
                <input id="firstName" type="text" name="firstname" /><br />
                <label for="lastName">Last Name:</label>
                <input id="lastName" type="text" name="lastname" />
            </form>
        </header>
    </div>)
}
export default Header;