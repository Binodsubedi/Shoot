import React from 'react'

const DashboardPictureCard = ({fileName}) => {
    return (
        <div className="DPBody__cardContainer">
            <div className='DPBody__cardContainer-image'></div>
            <h2>{fileName}</h2>
            <div className='DPBody__cardContainer-download'></div>
        </div>
      )
}

export default DashboardPictureCard