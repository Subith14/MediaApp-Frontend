import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'


function Home() {
  const [uploadVideoServerResponse,setuploadVideoServerResponse]=useState({})
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
      <div className="add-videos">
        <Add setuploadVideoServerResponse={setuploadVideoServerResponse} />
      </div>
      <Link to={'/WatchHistory'} style={{textDecoration:'none',color:'blue'}}>Watch History</Link>
    </div>
    
    <div className="container w-100 mt-5 mb-5 d-flex justify-content-between align-items-center">
      <div className="all-videos col-lg-9">
        <h3>All-Videos</h3>
        <View uploadVideoServerResponse={uploadVideoServerResponse} />

      </div>
      <div className="category col-lg-3">
       <Category />
      </div>
    </div>
    
    </>
  )
}

export default Home