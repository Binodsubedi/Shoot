import React from "react";


interface propItems{
    name: string;
}


class Home extends React.Component<propItems>{

    render(): React.ReactNode {
        return(
            <div className={this.props.name}>
                <video className="home__video"  autoPlay muted loop src="./videos/home.mp4"></video>
                <div className="home__overlay"></div>
            </div>
        )
    }
};

export default Home;