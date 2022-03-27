import React from 'react'
import Review from './Review'

const Main = () => {
    return (
        <div className='mainPage'>
            <section className='revContainer'>
                <div className='title'>
                    <h1>our reviews</h1>
                    <div className='underline'></div>
                </div>
                <Review />
            </section>                
        </div>
    )
}

export default Main
