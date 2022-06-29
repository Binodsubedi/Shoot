import React from "react";
import { Link } from "react-router-dom";
import './../styles/signup.css'
import web3 from "../web3";
import cloudStore from "../cloudStore";
import { useEffect } from "react";
import { useRef } from "react";
import axiosConfig from "../axiosConfig";

const Signup = ()=>{

let accounts;
let balance;

// (async () => {
//     // @ts-ignore
//     await window.ethereum.request({ method: 'eth_requestAccounts' });
//     // console.log(await web3.eth.getAccounts((err, accounts) => accounts));
//     accounts = await web3.eth.getAccounts((err, accounts) => accounts);
//     // console.log(accounts)
//   })();

  const username = useRef(null);
  const plan = useRef(null);
  const password = useRef(null);

  const signupSubmitHandler = async (e)=>{

    e.preventDefault();
    const user = username.current.value;
    const choice = plan.current.value;
    const pass = password.current.value;
    // console.log(balance)

    if(choice === 'Standard'){

        if(balance > 0.1*10**18){

            const data = await axiosConfig.post('app/user',{username:user,plan:choice,password:pass})
            // console.log(data)
            if(data){
                
                await cloudStore.methods.payment(1).send({
                    from:accounts[0],
                    value: web3.utils.toWei('0.1', 'ether')
                });

                await axiosConfig.post('app/payment',{uid:data.data.id})

                //after completing payment
                alert('New Account Created!!!')
            }
        
            
        }else{
            alert('Please check your balance')
        }



    }else if(choice==='King'){

        if(balance > 0.2*10**18){

            const data = await axiosConfig.post('app/user',{username:user,plan:choice,password:pass})
            // console.log(data)
            if(data){
                
                await cloudStore.methods.payment(2).send({
                    from:accounts[0],
                    value: web3.utils.toWei('0.2', 'ether')
                });

                await axiosConfig.post('app/payment',{uid:data.data.id})

                //after completing payment
                alert('New Account Created!!!')
            }
        
            
        }else{
            alert('Please check your balance')
        }


    }

  } 

  useEffect(()=>{
    (async()=>{
             // @ts-ignore
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    // console.log(await web3.eth.getAccounts((err, accounts) => accounts));
    accounts = await web3.eth.getAccounts((err, accounts) => accounts);
    balance = await web3.eth.getBalance(accounts[0])

    })()
  },[])


    return (
    <div className="signup-wrapper">
        <div className="signup-container">
        <h1 className="signup-container__heading">Signup</h1>
        <form className="signup-container__fillups" onSubmit={(e)=>signupSubmitHandler(e)}>
            <div className="signup-container__fillups--username">
                <label htmlFor="username">Username:</label>
                <input id="username" type="text" ref={username} required  />
            </div>

            <div className="signup-container__fillups--plan">
            <label htmlFor="plans">Plan:</label>
            <select id="plans" ref={plan}>
                <option value="Standard">Standard-500GB</option>
                <option value="King">King-5TB</option>
            </select>
            </div>
            <div className="signup-container__fillups--password">
                <label htmlFor="pass">Password:</label>
                <input id="pass" type="password" ref={password} required/>
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