import React, { useState } from 'react'
import person from './Data'
import {ReactComponent as QuoteIcon} from '../svgs/quote.svg'
import {ReactComponent as PrevIcon} from '../svgs/prev.svg'
import {ReactComponent as NextIcon} from '../svgs/next.svg'

const Review = () => {

    const [index, setIndex] = useState(0);

    const { id, name, job, description, img } = person[index];

    const checkNumber = (number) => {
        if (number > person.length -1) {
            return 0;
        } 
        if (number < 0) {
            return person.length - 1;
        }
        return number;
    };

    const nextPerson = () => {
        setIndex((index) => {
            const newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    const prevPerson = () => {
        setIndex((index) => {
            const newIndex = index - 1;
            return checkNumber(newIndex);
        }); 
    };

    const randomPerson = () => {
        const randomNumber = Math.floor(Math.random() * person.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    };

    return (
        <div className='review'>
            <div className='imgContainer'>
                <div className='imgContainerBefore'></div>
                <img src={img} alt={id} />
                <div className='quoteIcon'>
                    <QuoteIcon />
                </div>
            </div>
            <h2>{name}</h2>
            <p className='job'>{job}</p>
            <p className='info'>
                {description}
            </p>
            <div className='slideButton'>
                <button onClick={prevPerson} className='prevBtn'>
                    <PrevIcon />
                </button>
                <button onClick={nextPerson} className='nextBtn'>
                    <NextIcon />
                </button>
            </div>
            <button onClick={randomPerson} className='randomBtn'>Suprise Me</button>
        </div>
    )
}

export default Review
