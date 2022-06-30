import React from 'react'
import axios from 'axios'
import fileDownload from 'js-file-download'

const DashboardPictureCard = ({fileName}) => {

    const downloadManager = ()=>{

        axios.get(`http://localhost:4000/filedownload/photo/${fileName}`,
        { responseType: 'blob' }
                    ).then((res)=>{
                        fileDownload(res.data,fileName)
                    })

    }


    return (
        <div className="DPBody__cardContainer">
            <div className='DPBody__cardContainer-image'></div>
            <h2>{fileName}</h2>
            <div className='DPBody__cardContainer-download' onClick={()=>downloadManager()}></div>
        </div>
      )
}

export default DashboardPictureCard