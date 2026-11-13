import React from 'react'
import Container from '../../common/Container'
import { answerData } from '../../../dummyData/answerData'
import Paragraph from '../../utils/Paragraph'
import { FaCheck } from "react-icons/fa6";
import PrimaryBtn from '../../utils/PrimaryBtn';
import Image from '../../utils/Image';
import answerImg from '../../../assets/images/answerImg.png'

const Answer = () => {
    return (
        <section>
            <Container>
                <div className='grid grid-cols-2 items-center '>
                    <div className='mt-30.5 mb-40'>
                    <h5 className='font-Monts font-bold text-[42px] text-[#1920E0] '>Need More Answers?</h5>
                    <ul className='flex flex-col gap-2.5 mt-5.75'>
                        {answerData.map((item, index) => (
                            <li key={index}>
                                <div className='flex items-center gap-2.5'>
                                    <FaCheck className='text-blue' />
                                    <h5 className='font-bold font-Monts text-base text-black1 leading-6'>{item.label}</h5>
                                </div>
                                <Paragraph className={"font-normal font-lato text-gray2 leading-7.5 text-base"} text={item.desc} />
                            </li>
                        ))}
                    </ul>
                    <PrimaryBtn className={"bg-linear-to-r from-[#FF357D] to-[#FF6F33] text-white mt-9.5"} text={"Read More"}/>
                </div>
                <div>
                    <Image src={answerImg} alt='answerImg'/>
                </div>
                </div>
            </Container>
        </section>
    )
}

export default Answer