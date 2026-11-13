import React from 'react'
import FaqBar from './FaqBar'
import { Outlet } from 'react-router-dom'
import Container from '../common/Container'
import FaqIndex from '../../pages/faqPage/FaqIndex'

const FaqLayout = () => {
    return (
        <section>
            <Container>
                    <FaqBar />
                    <Outlet />
            </Container>
        </section>
    )
}

export default FaqLayout