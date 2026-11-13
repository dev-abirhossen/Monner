import React from 'react'
import Container from '../../common/Container'
import { MdKeyboardArrowRight } from "react-icons/md";
import Paragraph from '../../utils/Paragraph';
import Breadcrumb from '../../common/Breadcrumb';


const Questions = () => {
    return (
        <>
            <section>
                <Breadcrumb label={"FAQ"} rootPage={"Home"}/>
                <Container>
                    <div className='text-center mt-26.5'>
                        <h3 className="font-bold font-Monts text-black1 text-[34px] ">Frequently Asked Questions </h3>
                        <Paragraph className={"max-w-181 inline-block font-normal font-lato text-base text-gray2 leading-6.5"} text={"Nullam vestibulum, justo vitae varius interdum, nibh turpis eleifend tellus, sit amet porttitor orci erat vitae odio. Duis sapien metus, egestas rhoncus metus id, dignissim malesuada eros"}/>
                    </div>
                    <div>
                        
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Questions