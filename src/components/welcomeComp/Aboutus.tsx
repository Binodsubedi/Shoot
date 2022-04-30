import React from "react";



interface header{
    name:string;
  };

class AboutUs extends React.Component<header>{



    render(): React.ReactNode {
        return (<div className={this.props.name} >About Us</div>)
    }
}

export default AboutUs;