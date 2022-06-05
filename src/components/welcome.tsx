import React from 'react'
import './../styles/welcome.css'
import Header from './welcomeComp/Header'
import Home from './welcomeComp/Home'
import Services from './welcomeComp/Services'
import Connect from './welcomeComp/Connect'
import AboutUs from './welcomeComp/Aboutus'


interface StyleIn extends Element{
  style: {opacity:string, top:string}
}

const Welcome = () => {

  // (()=>{

  //   window.addEventListener('scroll',(e)=>{

  //     if(window.scrollY == 124){
  //       const service:StyleIn | null = document.querySelector('.services__textField');
  //       // const service:StyleIn | null = document.querySelector('.services');
  //       // if(service){
  //       //   service.style.opacity = '1';
  //       //   service.style.top = '35%'
  //       // }

        
  //       if(typeof service){
          
  //         document.querySelector('.services__textField').classList.add('textField-active');
  //       }

        

        
  //     }

  //   })

  // })();

  return (<div className='container'>

      <Header name='heading'/>
      <Home name='home'/>
      <Services name='services' />
      <Connect name='connect' />
      <AboutUs name='aboutUs' />
    
  </div>
  )
}

export default Welcome
