import React from 'react'
import NavBar from './dashboardComp/dashboardNav'
import MainArea from './dashboardComp/dashboardVideoBody'
import './../styles/dashboardVideo.css'

const Dashboard_video = () => {
  return (

    <div className='DVContainer'>
    <NavBar name='DNav' />
    <MainArea name='DVBody' />
    </div>

  )
}

export default Dashboard_video