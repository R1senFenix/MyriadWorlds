import React from "react";

const friendsTestList = [
    {
        UserName: "IssacBrandstetter",
        Online: true

    },
    {
        UserName: "DanielBrandstetter",
        Online: false
    },
    {
        UserName: "AdamHoule",
        Online: true
    },


]

function FooterBar(props) {
    const friendsDropup = friendsTestList.map((friendsTestList) => {
        if (friendsTestList.Online === true) {
            return (

                <option className="friends bolded">{friendsTestList.UserName}</option>
            )
        } else {
            return (

                <option className="friends">{friendsTestList.UserName}</option>
            )
        }
    });

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
            <select name="friends-list" >{friendsDropup}</select>


        </footer>
    </div>);
}

export default FooterBar;