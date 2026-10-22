import React from 'react'
import errorBg from '../../assets/images/errorBg.png'
import Image from '../utils/Image'
import errorBg2 from '../../assets/images/errorBg2.png'
import Paragraph from '../utils/Paragraph'
import PrimaryBtn from '../utils/PrimaryBtn'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='relative h-screen w-full px-20 py-5'>
        <Image src={errorBg} alt={"img"} />
        <Image className={"absolute left-[48%] top-[30%] "} src={errorBg2} alt='img'/>
        <div className='absolute left-[55%] top-[31%] text-center'>
            <h2 className='text-blue font-Monts font-bold text-[120px]'>404</h2>
            <Paragraph className={"text-base font-bold font-Monts text-black1 mb-4.5"} text={"Sorry, Page not Found"}/>
            <NavLink to={"/"}>
            <PrimaryBtn className={"bg-blue text-white"} text={"Back to Home Page"}/></NavLink>
        </div>
    </section>
  )
}

export default ErrorPage