import React from 'react'
import NavBar from './dashboardComp/dashboardNav'
import MainArea from './dashboardComp/dashboardUploadBody'
import './../styles/dashboardUpload.css'

const Dashboard_upload = () => {
  return (

    <div className='DUContainer'>
    <NavBar name='DNav' />
    <MainArea name='DUBody' />
    </div>

  )
}

export default Dashboard_upload