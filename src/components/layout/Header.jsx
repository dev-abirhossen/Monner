import React, { useState } from 'react'
import Container from '../common/Container'
import logo from '../../assets/images/logo.png'
import Image from '../utils/Image'
import { HomeData } from '../../dummyData/HomeData'
import { NavLink, useLocation } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";


const Header = () => {
  const [show, setshow] = useState(false)
  const location = useLocation().pathname
  console.log(location)

  return (
    <header className='bg-blue2 w-full pt-6.25 pb-3.5 sm:px-5 relative'>
      <div className={`h-screen w-60 bg-black1/40 -translate-x-1/2 -right-30 top-0 absolute z-40 transition-all duration-300 ${show ? "block  " : "hidden"}`}/>
      <Container className={'container'}>
        <div className='flex justify-between items-center'>
          <div>
            <NavLink to={"/"}> <Image src={logo} alt='img' /></NavLink>
          </div>
          <div className='z-50' onClick={()=>setshow(!show)}>
            <span className='text-2xl font-bold text-white cursor-pointer '><FaBarsStaggered /></span>
          </div>
          <div className='hidden lg:block' >
            <ul className='flex items-center gap-14.75'>
              {HomeData.map((item, index) => (
                <li key={index}>
                  <NavLink to={item.url} className={`relative font-lato font-black text-base after:content-"" after:absolute after:w-0 after:h-0.75 after:bg-red-500 after:left-1/2 after:-bottom-1.5 after:-translate-x-1/2 hover:after:w-full after:transition-all after:duration-300 ${location === item.url ? "text-red-500" : "text-white"}`} >{item.label}</NavLink>
                </li>
              ))}
              <span className='text-white text-2xl cursor-pointer'><FaUser /></span>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header