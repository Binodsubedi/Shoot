import React from "react";
import { Link } from "react-router-dom";
import './../styles/signup.css'

const Signup = ()=>{
    return (
    <div className="signup-wrapper">
        <div className="signup-container">
        <h1 className="signup-container__heading">Signup</h1>
        <form className="signup-container__fillups">
            <div className="signup-container__fillups--username">
                <label htmlFor="username">Username:</label>
                <input id="username" type="text" required />
            </div>

            <div className="signup-container__fillups--plan">
            <label htmlFor="plans">Plan:</label>
            <select id="plans">
                <option value="Standard">Standard-500GB</option>
                <option value="King">King-5TB</option>
            </select>
            </div>
            <div className="signup-container__fillups--password">
                <label htmlFor="pass">Password:</label>
                <input id="pass" type="password" required/>
            </div>

            <div className="signup-container__fillups--submit">
                <button>Submit</button>
                <Link to='/login'>Already have an account?</Link>
            </div>
        </form>

    </div>
    </div>)
}

export default Signup;