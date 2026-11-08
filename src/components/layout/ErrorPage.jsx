import React from 'react'
import errorBg from '../../assets/images/errorBg.png'
import Image from '../utils/Image'
import errorBg2 from '../../assets/images/errorBg2.png'
import Paragraph from '../utils/Paragraph'
import PrimaryBtn from '../utils/PrimaryBtn'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='relative h-screen lg:w-full px-20 py-5 flex flex-col justify-center'>
        <Image className={"hidden lg:block"} src={errorBg} alt={"img"} />
        <Image className={"absolute lg:left-[48%] lg:top-[15%] xl:top-[20%] top-[30%] hidden lg:block"} src={errorBg2} alt='img'/>
        <div className='lg:absolute lg:left-[60%] xl:left-[55%] lg:top-[23%] xl:top-[29%] top-[36%] text-center '>
            <h2 className='text-blue font-Monts font-bold text-[120px] leading-none'>404</h2>
            <Paragraph className={"text-base font-bold font-Monts text-black1 mb-4.5"} text={"Sorry, Page not Found"}/>
            <NavLink to={"/"}>
            <PrimaryBtn className={"bg-blue text-white"} text={"Back to Home Page"}/>
            </NavLink>
        </div>
    </section>
  )
}

export default ErrorPage