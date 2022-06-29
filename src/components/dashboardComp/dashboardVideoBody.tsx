import React, { useEffect } from 'react'
import DashboardVideoCard from './dashboardVideoCard'
import { connect } from 'react-redux'
import { getVideos,VideoStruc,UserStruc } from '../../actions'
import { StoreState } from '../../reducers'

interface PropsIn{
  name:string;
  videos:VideoStruc[];
  user:UserStruc;
  getVideos:any;
}



const DashboardVideoBody = (props:PropsIn) => {

  useEffect(()=>{
    props.getVideos(props.user.id);
  },[])

  const videosItterator = ()=>{
    return props.videos.map((el)=>{

      return <DashboardVideoCard fileName={el.videoName} />

    })
  }

  return (
    <div className={props.name}>

      {
        videosItterator()
      }

      {/* <DashboardVideoCard  />
      <DashboardVideoCard  />
      <DashboardVideoCard  />
      <DashboardVideoCard  />
      <DashboardVideoCard  />
      <DashboardVideoCard  />
      <DashboardVideoCard  />
      <DashboardVideoCard  />
      <DashboardVideoCard  />
      <DashboardVideoCard  />
      <DashboardVideoCard  />
      <DashboardVideoCard  />
      <DashboardVideoCard  /> */}
    </div>
  )
}

const mapStateToProps = (state:StoreState):{videos:VideoStruc[],user:UserStruc}=>{

  return{
    videos:state.videos,
    user:state.loggedinUser
  }

}

export default connect(
mapStateToProps,{getVideos}
)(DashboardVideoBody);