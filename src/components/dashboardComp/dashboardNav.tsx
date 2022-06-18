import React from 'react'
import { Link } from 'react-router-dom'

const dashboardNav = ({name}) => {
  return (
    <div className={name}>
    <div className="DNav--mainItems">
    <div className="DNav--mainItems__logo"></div>
    <div className="DNav--mainItems__links">
        <Link to="/dashboard/upload" className="DNav--mainItems__links-1 DNav--link-1">Upload</Link>
        <Link to="/dashboard/video" className="DNav--mainItems__links-2 DNav--link-2">Video</Link>
        <Link to="/dashboard/picture" className="DNav--mainItems__links-3 DNav--link-3">Pictures</Link>
    </div>
</div>
<div className="DNav--profile"></div></div>
  )
}

export default dashboardNav