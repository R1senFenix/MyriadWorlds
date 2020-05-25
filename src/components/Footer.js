import React from "react";

function FooterBar() {
    return (<div>
        <footer>
            <div className="support-tags">
                <a id="settingLink" href='settings.html'>Settings</a>

                <a id="supportLink" href='support.html'>Support</a>
            </div><br />
            <a id="logo" href="index.html">
                <img src="./images/mylogo.jpg" height="50px" width="50px" alt="Missing" />
            </a>
            <p>FenixTech</p>
        </footer>
    </div>);
}

export default FooterBar;