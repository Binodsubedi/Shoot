import React from "react";
import {Link} from 'react-router-dom'
import './../styles/login.css'


const Login = ()=>{
    return (
        <div className="login-wrapper">
            <div className="login-container">
            <h1 className="login-container__heading">login</h1>
            <form className="login-container__fillups">
                <div className="login-container__fillups--username">
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text" required />
                </div>
                <div className="login-container__fillups--password">
                    <label htmlFor="pass">Password:</label>
                    <input id="pass" type="password" required/>
                </div>
    
                <div className="login-container__fillups--submit">
                    <button>Submit</button>
                    <Link to='/signup'>Create an account?</Link>
                </div>
            </form>
    
        </div>
        </div>)
}

export default Login;