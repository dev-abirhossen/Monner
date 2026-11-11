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
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Questions