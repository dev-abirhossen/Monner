import React from 'react'
import Container from '../../common/Container'
import Breadcrumb from '../../common/Breadcrumb'
import Paragraph from '../../utils/Paragraph';
import { locationData } from '../../../dummyData/locationData';
import Input from '../../utils/Input';


const Location = () => {
  return (
    <section>
      <Breadcrumb label={"Contact Us"} rootPage={"Home"} />
      <Container>
        <div className='flex justify-center mt-23.25'>
          <div className='max-w-205 flex gap-13.75'>
            {locationData.map((item,index)=>(
            <div key={index} className='max-w-60 text-center flex flex-col justify-center items-center'>
              <span className='text-[#00C3B7] text-3xl w-20 h-20 rounded-full shadow-2xl flex justify-center items-center'>{item.icon}</span>
              <h5 className='font-bold font-Monts text-xl text-black1 mt-1'>{item.label}</h5>
              <Paragraph className={"font-lato font-bold text-gray2 text-base leading-6.5"} text={item.contact} />
              <Paragraph className={"font-lato font-bold text-gray2 text-base leading-6.5"} text={item.altContact} />
            </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center mt-18 '>
          <div className='max-w-181.25 text-center'>
            <h4 className='font-bold font-Monts text-[34px] text-black1 '>We are ready to help grow your idea</h4>
            <Paragraph className={"font-lato font-normal text-base text-gray2 leading6.5"} text={"Ut feugiat dictum consequat. Aenean varius, augue malesuada eleifend faucibus"}/>
            <div>
              <Input className={"py-2.5 px-5 "} type={"text"} placeholder={"Your Name"}/>
              <Input className={"py-2.5 px-5 "} type={"text"} placeholder={"Your Name"}/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Location