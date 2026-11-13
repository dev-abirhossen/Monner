import React, { useState } from 'react'
import Container from '../common/Container'
import { faqBarData } from '../../dummyData/faqBarData'
import { NavLink, useLocation } from 'react-router-dom'

const FaqBar = () => {
    const [isActive, setisActive] = useState()
    const pathName = useLocation().pathname
    console.log(pathName)
    return (
        <section>
            <Container>
                <div className='flex justify-center mt-10.25'>
                    <ul className='max-w-184.75 flex gap-19'>
                    {faqBarData.map((item, index) => (
                        <li key={index}>
                            <NavLink className={`font-bold font-Monts text-lg tracking-[0.33px] ${pathName == item.url? "text-[#1920E0]" : "text-gray2" }`} to={item.url}>{item.label}</NavLink>
                        </li>
                    ))}

                </ul>
                </div>
            </Container>
        </section>
    )
}

export default FaqBar