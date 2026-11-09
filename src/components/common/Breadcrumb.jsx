import React from 'react'
import Container from './Container'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Paragraph from '../utils/Paragraph'

const Breadcrumb = ({label, rootPage}) => {
    return (
        <section className='bg-linear-to-r from-[10%] via-[70%] via-[#FF357D] from-[#141778] to-[#550096] '>
            <Container>
                <div className='flex flex-col justify-center items-center pt-20.5 pb-31'>
                    <h2 className='font-bold font-Monts text-[34px] text-white leading-12 uppercase'>{label}</h2>
                    <div className='flex items-center mt-11.25'>
                        <h5 className='font-bold font-lato text-sm text-white'>{rootPage}</h5>
                        <MdKeyboardArrowRight className='text-white' />
                        <Paragraph className={"font-normal font-lato text-sm text-pink1 uppercase"} text={label} />
                    </div>
                </div>
            </Container>
        </section>)
}

export default Breadcrumb