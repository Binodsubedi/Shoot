import axios from 'axios';
import React, { useRef, useState } from 'react'
import { connect } from 'react-redux';
import { UserStruc } from '../../actions';
import axiosConfig from '../../axiosConfig';
import { StoreState } from '../../reducers';


interface PropsIn{
  name:string;
  user:UserStruc;
}



const DashboardUploadBody = (props:PropsIn) => {

  const [FileName, SetFileName] = useState('');

  const [extension,SetExtension] = useState('');

  const Filefield = useRef<HTMLInputElement>(null);

  // const form = new FormData()

  const changeAction = (e:any)=>{

    const val = e.target.value;

    // form.append('file',e.target.files[0])

    let valLast = val.split('\\')

    // console.log(valLast)


    SetFileName(valLast[valLast.length -1])

    // console.log(FileName);

    SetExtension(valLast[valLast.length-1].split('.')[1])

    // console.log(extension)  

  }

  const uploadHandler = async(e:any)=>{

    e.preventDefault();

    const form = new FormData()

    form.append('filename',FileName);
    if(Filefield.current?.files != null){
      form.append('file',Filefield.current?.files[0])
    }

    // console.log(extension)

    if(extension ==='jpg' || extension ==='png'){

      const data = {photoName:FileName,uid:props.user.id}

      const photoUpdate = await axiosConfig.post('app/photos', data);

      // console.log(photoUpdate);

      // form.append('filename',FileName)

      axios.post('http://localhost:4000/file',form).then((e)=>{
        if(e.data.status === 'success'){
          alert('File Upload Complete ✔')
        }else{
          alert('File Upload Interrupted ❌')
        }
      })

   }else if(extension ==='mp4' || extension ==='mkv' || extension === 'avi'){

      const data = {videoName:FileName,uid:props.user.id}

      const videoUpdate = await axiosConfig.post('app/videos', data);

      // console.log(videoUpdate);

      // form.append('filename',FileName)

      axios.post('http://localhost:4000/file',form).then((e)=>{
        if(e.data.status === 'success'){
          alert('File Upload Complete ✔')
        }else{
          alert('File Upload Interrupted ❌')
        }
      })



    }


  }

  return (
    <div className={props.name}>
        <form className='DUBody--mainContainer'>
          <input type="file" className='DUBody--mainContainer__file' onChange={(e)=>changeAction(e)} ref={Filefield}/>
          <input type="text" placeholder='Name' className='DUBody--mainContainer__fileName' value={FileName} onChange={(e)=>SetFileName(e.target.value)} required />
          <button onClick={(e)=>uploadHandler(e)} >Upload</button>
        </form>
    </div>
  )
}


const mapStateToProps = (state:StoreState):{user:UserStruc}=>{
  return {
    user:state.loggedinUser
  }
}

export default connect(
mapStateToProps
)(DashboardUploadBody);