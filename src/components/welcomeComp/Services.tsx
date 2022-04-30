import React, { useEffect, useRef } from "react";
// import background from './../../images/welcomePage/DataCenter.jpg';
import standard from './../../images/welcomePage/svgIcons/Standard.svg'
import king from './../../images/welcomePage/svgIcons/King.svg'




interface header{
    name:string;
  };

//   interface Transition extends HTMLButtonElement{
//       style:{transition:string};
//   }

// class Services extends React.Component<header>{



//     render(): React.ReactNode {
//         return (<div className={this.props.name} >
//             <h1 className="services__textField">Connect to bigger world with a single click</h1>
//         </div>)
//     }
// }




const Services = (props:header):JSX.Element=>{

    const service = useRef<HTMLHeadingElement>(null);
    const btn = useRef<HTMLButtonElement>(null);
    const plans = useRef<HTMLDivElement>(null);

    const mouseOn = (e:any)=>{

        const sytleIn = btn.current;

        if(sytleIn){

            sytleIn.style.transition = 'all 0.3s ease-in-out';
            // sytleIn.style.transform = 'scale(1.2)'
        };
    
    };


    useEffect(()=>{

        window.addEventListener('scroll', ()=>{


            console.log(window.scrollY);

            
            if(window.scrollY > 140){
 

                service.current?.classList.add('textField-active');
                btn.current?.classList.add('services__btn-active');
                // plans.current?.classList.add('plans-container-active');
            }

            if(window.scrollY > 144){

                plans.current?.classList.add('plans-container-active');
            }

            // switch(window.scrollY){
            //     case 140:
            //     service.current?.classList.add('textField-active');
            //     btn.current?.classList.add('services__btn-active');
            //     break;

            //     case 145:
            //     plans.current?.classList.add('plans-container-active');


            // }

                // console.log(service.current);
            
        })

    },[]);


    return(<div className={props.name} >
                    <div className="services__heading">

                     <h1 className="services__textField" ref={service}>Connect to a bigger world with a single click</h1>
                    <button className="services__button" ref={btn} onMouseEnter={(e)=>mouseOn(e)} > <a href="#">
                        Connect now
                        </a>
                        </button>
                    </div>

                    <div className="services__plans-container" ref={plans}>
                        <div className="services__plans-container-1">
                        <img alt="Standard" src={standard}  className="services__plans-container-img plans__image-1" />
                        <h2>Standard Plan</h2>
                        </div>
                        <div className="services__plans-container-2">
                        <img alt="King" src={king}  className="services__plans-container-img plans__image-2" />
                        <h2 className="services__plans-container-text">King Plan</h2>
                        </div>
                    </div>
              </div>)
}

export default Services;