import React from 'react'

const DashboardVideoCard = ({fileName}) => {
  return (
    <div className="DVBody__cardContainer">
        <div className='DVBody__cardContainer-image'></div>
        <h2>{fileName}</h2>
        <div className='DVBody__cardContainer-download'></div>
    </div>
  )
}

export default DashboardVideoCard