import React, { useState } from 'react'

const DashboardUploadBody = ({name}) => {

  const [FileName, SetFileName] = useState('');

  const changeAction = (e:any)=>{

    const val = e.target.value;

    let valLast = val.split('\\')

    console.log(valLast)


    SetFileName(valLast[valLast.length -1])

  }

  return (
    <div className={name}>
        <form className='DUBody--mainContainer'>
          <input type="file" className='DUBody--mainContainer__file' onChange={(e)=>changeAction(e)} />
          <input type="text" placeholder='Name' value={FileName} onChange={(e)=>SetFileName(e.target.value)} required />
          <button >Submit</button>
        </form>
    </div>
  )
}

export default DashboardUploadBody