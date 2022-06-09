import React from 'react'
import {Link} from 'react-router-dom'
import './Video.css'

import earthVideo from '../assets/earthVideo.mp4'


function video() {
  return (
    <div className='earthVid'>
        <video autoPlay loop muted id='vid'>
            <source src ={earthVideo} type='video/mp4'></source>
        </video>
        <div className='vid-overlay'>
            <h1>Travel</h1>
            <p>Akin's space Travels</p>
        <div>
            <Link to='/training' className='btn'>Training</Link>
            <Link to='/contact' className='btn btn-light'>Launch</Link>
        </div>
        </div>
        </div>
  )
}

export default video