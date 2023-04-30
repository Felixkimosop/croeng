import React from 'react'
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <div className='flex '>
        <div>
            <img style={{width:"90px", marginLeft:"80px"}} className="mt-4 pb-3 "  src='/images/logoimg.png' alt=''/>
        </div>
        <div className='gap-8'>
            <ul className='flex gap-11 mt-4 pt-3'style={{marginLeft:"900px"}}>
                <li>
                    Menu
                </li>
                <li> <NavLink to="/about">About us</NavLink></li>
                <li><NavLink to="/faqs">FAQS</NavLink></li>
                <li> <NavLink to="/contactus">Contact us</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar