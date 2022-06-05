import React from "react";
import {Link} from 'react-router-dom';



interface header{
    name:string;
  };

class Connect extends React.Component<header>{



    render(): React.ReactNode {
        return (<div className={this.props.name} >
            <div className="connect--inner-container">
                <h2 className="connect--inner-container__text">Connect Today!</h2>
                <Link to='/signup' className="connect--inner-container__button">Sign-Up Now</Link>
            </div>
        </div>)
    }
}

export default Connect;