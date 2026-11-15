import React, { useState } from 'react'
import Container from '../../common/Container'
import Breadcrumb from '../../common/Breadcrumb'
import Paragraph from '../../utils/Paragraph';
import { locationData } from '../../../dummyData/locationData';
import Input from '../../utils/Input';
import PrimaryBtn from '../../utils/PrimaryBtn';


const Location = () => {
  const [formData, setformData] = useState({
    name:"", email:"", companyName:"", Phone:""
  })
  const [error, seterror] = useState({
    name:"", email:'', companyName:""
  })
  const handleChange = (event)=>{
    const {name,value} = event.target
    setformData((prevData)=>({
      ...prevData, [name]:value
    }))
    seterror((prevData)=>({
      ...prevData, [name]:""
    }))
  }
  const handleSend = ()=>{
    if(formData == ""){
      validationError = errorText
    }
  }
  return (
    <section>handleChange      <Breadcrumb label={"Contact Us"} rootPage={"Home"} />
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
            <form>
              <div className='flex gap-4 justify-center mt-3.25 '>
              <Input name={"name"} onchange={handleChange} className={"py-2.5 px-5 w-88.5 border border-gray3 rounded-3xl outline-0"} type={"text"} placeholder={"Your Name"}/>
              <Input name={"email"} onchange={handleChange} className={"py-2.5 px-5 w-88.5 border border-gray3 rounded-3xl outline-0"} type={"email"} placeholder={"Your Email"}/>
            </div>
            <div className='flex gap-4 justify-center mt-3.25 '>
              <Input name={"companyName"} onchange={handleChange} className={"py-2.5 px-5 w-88.5 border border-gray3 rounded-3xl outline-0"} type={"text"} placeholder={"Company Name"}/>
              <Input name={"phone"} onchange={handleChange} className={"py-2.5 px-5 w-88.5 border border-gray3 rounded-3xl outline-0"} type={"number"} placeholder={"Phone Number"}/>
            </div>
            <textarea className='px-5 py-2.5 h-54.75 w-181.25 rounded-3xl border border-gray3 mt-4.5 outline-0' name="" placeholder='Tell About Your Project'></textarea>
            <PrimaryBtn  type={"submit"} className={"bg-linear-to-r from-[#FF357D] to-[#FF6F33] text-white px-21.25 mt-4.25 mb-25"} text={"Send"}/>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Location