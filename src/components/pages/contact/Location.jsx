import React from 'react'
import Container from '../../common/Container'
import Breadcrumb from '../../common/Breadcrumb'
import Paragraph from '../../utils/Paragraph';
import { locationData } from '../../../dummyData/locationData';


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
      </Container>
    </section>
  )
}

export default Location