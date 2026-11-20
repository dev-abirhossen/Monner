import React, { useState } from 'react'
import Container from '../../common/Container'
import Breadcrumb from '../../common/Breadcrumb'
import Paragraph from '../../utils/Paragraph';
import { locationData } from '../../../dummyData/locationData';
import Input from '../../utils/Input';
import PrimaryBtn from '../../utils/PrimaryBtn';


const Location = () => {
  const [formData, setformData] = useState({
    name: "", email: "", companyName: "", phone: ""
  })
  const [error, seterror] = useState({
    name: "", email: '', companyName: "", phone: ""
  })
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  
  const handleChange = (event) => {
    const { name, value } = event.target
    setformData((prevData) => ({
      ...prevData, [name]: value
    }))
    seterror((prevData) => ({
      ...prevData, [name]: ""
    }))
    console.log(name,value)
  }
  const validation = () => {
    const validationError = {}
    if (!formData.name.trim()) {
      validationError.name = "Please Enter Your Name"
    }
    if (!formData.email.trim()) {
      validationError.email = "Please Enter Your Email"
    } else if (!emailRegex.test(formData.email)) {
      validationError.email = "Please Enter a Valid Email Address"
    }
    if (!formData.companyName.trim()) {
      validationError.companyName = "Please Enter Your Company Name"
    }
    if (!formData.phone.trim()) {
      validationError.phone = "Please Enter Your Phone Number"
    }else if(formData.phone.length < 10){
      validationError.phone = "Please Enter a Valid Phone Number"
    }
    return validationError
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const validationError = validation()
    if (Object.keys(validationError).length > 0) {
      seterror(validationError)
    } else {
      console.log(formData)
    }
  }

  return (
    <section>handleChange      <Breadcrumb label={"Contact Us"} rootPage={"Home"} />
      <Container>
        <div className='flex justify-center mt-23.25'>
          <div className='max-w-205 flex gap-13.75'>
            {locationData.map((item, index) => (
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
          <div className='max-w-181.25'>
            <h4 className='font-bold font-Monts text-[34px] text-black1 '>We are ready to help grow your idea</h4>
            <Paragraph className={"font-lato font-normal text-base text-gray2 leading6.5"} text={"Ut feugiat dictum consequat. Aenean varius, augue malesuada eleifend faucibus"} />
            <form noValidate onSubmit={handleSubmit}>
              <div className="flex gap-4 flex-col">
                <div className='flex gap-4 justify-center mt-3.25 '>
                <div>
                  <Input name={"name"} onchange={handleChange} className={`py-2.5 px-5 w-88.5 border border-gray3 rounded-3xl outline-0 ${error.name ? 'border-red-500' : 'default'}`} type={"text"} placeholder={"Your Name"} />
                <span className='text-red-500'>{error.name}</span>
                </div>
                <div>
                  <Input name={"email"} onchange={handleChange} className={`py-2.5 px-5 w-88.5 border border-gray3 rounded-3xl outline-0 ${error.email ? 'border-red-500' : 'default'}`} type={"email"} placeholder={"Your Email"} />
                <span className='text-red-500'>{error.email}</span>
                </div>
              </div>
              <div className='flex gap-4 justify-center mt-3.25'>
                <div>
                  <Input name={"companyName"} onchange={handleChange} className={`py-2.5 px-5 w-88.5 border border-gray3 rounded-3xl outline-0 ${error.companyName ? 'border-red-500' : 'default'}`} type={"text"} placeholder={"Company Name"} />
                <span className='text-red-500'>{error.companyName}</span>
                </div>
                <div>
                  <Input name={"phone"} onchange={handleChange} className={`py-2.5 px-5 w-88.5 border border-gray3 rounded-3xl outline-0 ${error.phone ? 'border-red-500' : 'default'}`} type={"number"} placeholder={"Phone Number"} />
                  <span className='text-red-500'>{error.phone}</span>
                </div>
              </div>
              </div>
              <textarea className='px-5 py-2.5 h-54.75 w-181.25 rounded-3xl border border-gray3 mt-4.5 outline-0' name="" placeholder='Tell About Your Project'></textarea>
              <PrimaryBtn type={"submit"} className={"bg-linear-to-r from-[#FF357D] to-[#FF6F33] text-white px-21.25 mt-4.25 mb-25"} text={"Send"} />
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Location