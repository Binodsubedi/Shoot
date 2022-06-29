import React, { useEffect } from 'react'
import DashboardPictureCard from './dashboardPictureCard'
import { connect } from 'react-redux'
import {PhotoStruc,UserStruc,getPhotos} from './../../actions'
import { StoreState } from '../../reducers'


interface PropsIn{
  name:string;
  photos:PhotoStruc[];
  user:UserStruc;
  getPhotos:any;
}


const DashboardPictureBody = (props:PropsIn) => {

  useEffect(()=>{

    props.getPhotos(props.user.id)

  },[]);


  const photosItterator = ()=>{
    return props.photos.map(el=>{
      return <DashboardPictureCard fileName={el.photoName} />
    })
  }


  return (
    <div className={props.name}>
     {photosItterator()}

      {/* <DashboardPictureCard />
      <DashboardPictureCard />
      <DashboardPictureCard />
      <DashboardPictureCard />
      <DashboardPictureCard />
      <DashboardPictureCard />
      <DashboardPictureCard />
      <DashboardPictureCard />
      <DashboardPictureCard />
      <DashboardPictureCard />
      <DashboardPictureCard />
      <DashboardPictureCard />
      <DashboardPictureCard /> */}
      
    </div>
  )
}


const mapStateToProps = (state:StoreState):{photos:PhotoStruc[],user:UserStruc} =>{

  return{

    photos: state.photos,
    user: state.loggedinUser

  }

}


export default connect(
  mapStateToProps,
  {getPhotos}
)(DashboardPictureBody);