import React from "react";
import ReactDOM  from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Welcome from "./components/welcome";
import Signup from "./components/signup";
import Login from "./components/login";



class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>

            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));