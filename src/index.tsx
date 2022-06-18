import React from "react";
import ReactDOM  from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Welcome from "./components/welcome";
import Signup from "./components/signup";
import Login from "./components/login";
import DashboardUpload from "./components/dashboard_upload";
import DashboardVideo from "./components/dashboard_video";
import DashboardPicture from "./components/dashboard_pictures";

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboard/upload" element={<DashboardUpload/>}/>
                <Route path="/dashboard/video" element={<DashboardVideo/>}/>
                <Route path="/dashboard/picture" element={<DashboardPicture/>}/>
            </Routes>

            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));