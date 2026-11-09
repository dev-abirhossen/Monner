import React from 'react'
import Container from '../common/Container'
import Image from '../utils/Image'
import logoImg from '../../assets/images/Logo.png'
import Paragraph from '../utils/Paragraph'
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { companyData } from '../../dummyData/companyData'
import { newsData } from '../../dummyData/newsData'
import { NavLink } from 'react-router-dom'



const Footer = () => {
  const footerHead = `font-bold font-Monts text-2xl text-white`
  return (
    <footer className='bg-linear-to-r from-blue3 to-bluebiolate pt-27.5 pb-29'>
      <Container>
        <div className='grid grid-cols-3 gap-23.75'>
          <div>
            <Image src={logoImg} alt='logoImg' />
            <Paragraph className={"max-w-71.25 mt-5.75 font-lato font-normal text-base text-white leading-7"} text={"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin commodo"} />
            <div className='flex items-center gap-4.5 mt-4'>
              <GrMail className='text-[#FF5851]' />
              <span className='font-bold font-lato text-base text-white leading-6.25'>monnersupport@email.com</span>
            </div>
            <div className='flex items-center gap-4.5 mt-3.75'>
              <BsFillTelephoneForwardFill className='text-[#FF5851]' />
              <span className='font-bold font-lato text-base text-white leading-6.25'>(+1) 123-123-123</span>
            </div>
            <div className='flex items-center gap-4.5 mt-3.75'>
              <IoLocationSharp className='text-[#FF5851]' />
              <span className='font-bold font-lato text-base text-white leading-6.25'>275 Jimmy Way
                Copperopolis, California(CA), 95228</span>
            </div>
          </div>
          <div className='mt-5'>
            <h3 className={footerHead}>Company</h3>
            <ul className='mt-8.25 flex flex-col gap-4.5'>
              {companyData.map((item, index) => (
                <li className='flex items-center gap-2.5 text-white' key={index}>
                  {item.icon}
                  <NavLink to={item.url} className='font-bold font-lato text-base leading-6'>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-5'>
            <h3 className={footerHead}>Recent News</h3>
            <ul className='flex flex-col mt-5.5 gap-7.75'> 
              {newsData.map((item, index) => (
                <li key={index}>
                  <h4 className='font-bold font-Monts text-base leading-5.75 text-white'>{item.label}</h4>
                  <Paragraph className={"font-bold font-lato text-gray1 text-sm"} text={item.desc}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer