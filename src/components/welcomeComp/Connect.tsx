import React from "react";



interface header{
    name:string;
  };

class Connect extends React.Component<header>{



    render(): React.ReactNode {
        return (<div className={this.props.name} >Connect</div>)
    }
}

export default Connect;