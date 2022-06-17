import React from 'react'

const dashboardNav = ({name}) => {
  return (
    <div className={name}>
    <div className="DNav--mainItems">
    <div className="DNav--mainItems__logo">logo</div>
    <div className="DNav--mainItems__links">
        <a href="" className="DNav--mainItems__links-1 DNav--link-1">Upload</a>
        <a href="" className="DNav--mainItems__links-2 DNav--link-2">Video</a>
        <a href="" className="DNav--mainItems__links-3 DNav--link-3">Pictures</a>
    </div>
</div>
<div className="DNav--profile">Profile</div></div>
  )
}

export default dashboardNav