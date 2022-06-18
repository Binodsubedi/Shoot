import React from 'react'
import NavBar from './dashboardComp/dashboardNav'
import MainArea from './dashboardComp/dashboardPictureBody'
import './../styles/dashboardPicture.css'

const Dashboard_pictures = () => {
  return (
    <div className='DPContainer'>
    <NavBar name='DNav' />
    <MainArea name='DPBody' />
    </div>
  )
}

export default Dashboard_pictures