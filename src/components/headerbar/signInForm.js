import React from "react";

function SignInForm() {
    return (<div>
        <form id="signIn">
            <fieldset>
                <legend>Sign In</legend>
                <label for="firstName">First Name:</label>
                <input id="firstName" type="text" name="firstname" /><br />
                <label for="lastName">Last Name:</label>
                <input id="lastName" type="text" name="lastname" /><br />
                <input type="submit" value="Submit"></input>
            </fieldset>
        </form>

    </div>)
}
export default SignInForm;