import React from 'react'
import axios from 'axios'
import fileDownload from 'js-file-download'

const DashboardVideoCard = ({fileName}) => {

  const downloadManager = ()=>{

    axios.get(`http://localhost:4000/filedownload/video/${fileName}`,
    { responseType: 'blob' }
                ).then((res)=>{
                    fileDownload(res.data,fileName)
                })

}

  return (
    <div className="DVBody__cardContainer">
        <div className='DVBody__cardContainer-image'></div>
        <h2>{fileName}</h2>
        <div className='DVBody__cardContainer-download' onClick={()=>downloadManager()}></div>
    </div>
  )
}

export default DashboardVideoCard