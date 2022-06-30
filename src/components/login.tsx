import React, { useRef } from "react";
import {Link, useNavigate} from 'react-router-dom'
import './../styles/login.css'
import axiosConfig from "../axiosConfig";
import { connect } from "react-redux";
import {login,UserStruc} from './../actions/index'
import { StoreState } from "../reducers";

interface PropsIn{
    login:any
}


const Login = (props:PropsIn)=>{


    const user = useRef<HTMLInputElement>(null)
    const pass = useRef<HTMLInputElement>(null)

    const navigate = useNavigate()

    const loginSubmitHandler = async(e:any)=>{
        e.preventDefault();

        const name = user.current?.value
        const password = pass.current?.value

        const loginCheck = await axiosConfig.post('app/usercheck',{username:name,password})

        // console.log(loginCheck.data)

        if(loginCheck.data.status === 'success'){

            let userData = loginCheck.data.data
            // console.log(userData)
            props.login(userData.id,userData.username,userData.password,userData.plan)

            navigate('/dashboard/upload');

            // alert("You are logged in!")
        }
        else{
            alert("Wrong Credentials")
        }
    }

    return (
        <div className="login-wrapper">
            <div className="login-container">
            <h1 className="login-container__heading">login</h1>
            <form className="login-container__fillups" onSubmit={(e)=>loginSubmitHandler(e)}>
                <div className="login-container__fillups--username">
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text" ref={user} required />
                </div>
                <div className="login-container__fillups--password">
                    <label htmlFor="pass">Password:</label>
                    <input id="pass" type="password" ref={pass} required/>
                </div>
    
                <div className="login-container__fillups--submit">
                    <button>Submit</button>
                    <Link to='/signup'>Create an account?</Link>
                </div>
            </form>
    
        </div>
        </div>)
}


export default connect(
null,{login}
)(Login);