import React from "react";




interface header{
    name:string;
  };

class Header extends React.Component<header>{



    render(): React.ReactNode {
        return (<div className={this.props.name} >
            
            <div className="heading__links">
                <a href="" className="heading__link heading__link-1">Home</a>
                <a href="" className="heading__link heading__link-2">Services</a>
                <a href="" className="heading__link heading__link-3">Connect</a>
                <a href="" className="heading__link heading__link-4">About-US</a>
            </div>
            </div>
        )
    }
}

export default Header;