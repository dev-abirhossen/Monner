import React from 'react'
import Container from '../../common/Container'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Paragraph from '../../utils/Paragraph';
import Image from '../../utils/Image';
import blockChainImg from '../../../assets/images/blockChainImg.jpg'
import { blockChainData } from '../../../dummyData/blockChainData';

const BlockChain = () => {
  return (
    <section className='bg-[#F2F2FF]'>
        <Container>
            <div className='grid grid-cols-[574px_auto] gap-14 items-center '>
                <div >
                    <h3 className='font-bold font-Monts text-[42px] text-black1'>Maximize your blockchain investment</h3>
                    <div className='grid grid-cols-2 relative -translate-x-6 mt-5'>
                        <div>
                       <div className='flex gap-2.5'>
                         <span className='translate-1'><MdOutlineKeyboardArrowRight /></span>
                         <h5 className='font-bold font-Monts text-base text-black1'>Build blockchaine solutions independently</h5>
                       </div>
                       <Paragraph className={"font-normal font-lato text-sm text-gray2 pl-6"}   text={"Integer posuere fermentum pretium. Proin malesuada "}/>
                    </div>
                    <div>
                       <div className='flex gap-2.5'>
                         <span className='translate-1'><MdOutlineKeyboardArrowRight /></span>
                         <h5 className='font-bold font-Monts text-base text-black1'>Build blockchaine solutions independently</h5>
                       </div>
                       <Paragraph className={"font-normal font-lato text-sm text-gray2 pl-6"} text={"Integer posuere fermentum pretium. Proin malesuada "}/>
                    </div>
                    </div>
                </div>
                <div className='w-192.5 h-159.75 overflow-hidden '>
                    <Image className={"size-full"} src={blockChainImg} alt='blockChainImg'/>
                </div>
            </div>
            <div className='flex justify-center mt-12.75 mb-22.75'>
                <div className='w-276'>
                <div className='flex items-center gap-12 justify-center'>
                    {blockChainData.map((item, index)=>(
                    <div className='w-33.5 h-31.5 overflow-hidden' key={index}>
                        <Image className={" object-cover size-full"} src={item.img} alt={item.alt}/>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </Container>
    </section>
  )
}

export default BlockChain