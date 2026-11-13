import React from 'react'
import FaqBar from './FaqBar'
import { Outlet } from 'react-router-dom'
import Container from '../common/Container'
import Questions from '../pages/faq/Questions'
import Answer from '../pages/faq/Answer'

const FaqLayout = () => {
    return (
        <section>
            <Questions />
            <Container>
                <div>
                    <FaqBar />
                    <Outlet />
                </div>
                <Answer/>
            </Container>
        </section>
    )
}

export default FaqLayout