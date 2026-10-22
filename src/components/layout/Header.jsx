import React from 'react'
import Container from '../common/Container'
import logo from '../../assets/images/logo.png'
import Image from '../utils/Image'
import { HomeData } from '../../dummyData/HomeData'
import { NavLink } from 'react-router-dom'
import { FaUser } from "react-icons/fa";


const Header = () => {
  return (
    <nav className='bg-blue2 pt-6.25 pb-3.5'>
      <Container>
        <div className='flex justify-between items-center'>
          <div>
           <NavLink to={"/"}> <Image src={logo} alt='img' /></NavLink>
          </div>
          <div >
            <ul className='flex items-center gap-14.75'>
              {HomeData.map((item, index) => (
                <li key={index}>
                  <NavLink  to={item.url} className='relative font-lato font-black text-white text-base after:content-"" after:absolute after:w-0 after:h-0.75 after:bg-red-500 after:-left-1/2 after:-bottom-1.5 after:translate-x-1/2 hover:after:w-full after:transition-all after:duration-300' >{item.label}</NavLink>
                </li>
              ))}
            <span className='text-white text-2xl cursor-pointer'><FaUser /></span>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Header