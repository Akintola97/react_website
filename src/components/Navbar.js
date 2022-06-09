import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import "./Navbar.css"



function Navbar() {
    const[click,setClick] = useState(false)
    const menuClick = () => setClick(!click)


  return (
    <div className='header'>
        <Link to='/'>
        <h1>Travel</h1></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
                <Link to='/training'>Training</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={menuClick}>
            {click ? (<FaTimes style={{color:'white'}}/>) :  <FaBars style={{color:'white'}} /> }
        </div>
        </div>
  )
}

export default Navbar