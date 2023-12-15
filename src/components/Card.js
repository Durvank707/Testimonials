import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
    let review = props.review;
    
    return (
        <div className='data'>
            <div className='image'>
                <img src = {review.image} alt='face'/>
                <div className='shadow'></div>
            </div>
             
            <div>
                <p className='name'>{review.name}</p>
                <p className='job'>{review.job}</p>
            </div>

            <div className='comma'>
                <FaQuoteLeft/>
            </div>

            <div className='text'>
                {review.text}
            </div>

            <div className='comma'>
                <FaQuoteRight/>
            </div>
        </div>
    )
}

export default Card