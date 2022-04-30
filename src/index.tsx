import React from "react";
import ReactDOM  from "react-dom";
import Welcome from "./components/welcome";


class App extends React.Component{
    render(){
        return(
            <Welcome/>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));