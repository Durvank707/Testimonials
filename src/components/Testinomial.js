import React from 'react'
import Card from './Card'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";  
import { useState } from 'react';

const Testinomial = (props) => {
    let review = props.review;
    const [index, setindex] = useState(0);

    function leftShiftHandler(){
        if(index -1 < 0 ){
            setindex(review.length - 1);
        }
        else{
            setindex(index-1);
        }
    }

    function rightShiftHandler(){
        if(index + 1 >= review.length ){
            setindex(0);
        }
        else{
            setindex(index + 1);
        }
    }

    function surpriseHandler(){
        let x = Math.floor(Math.random() * review.length)
        setindex(x);  
    } 

    return (
        <div>
            <Card review = {review[index]}></Card>

            <div className='btns'>
                <div> 
                    <button className='arrow' onClick={leftShiftHandler}>
                        <FaChevronLeft />
                    </button>
                    <button className='arrow' onClick={rightShiftHandler}>
                        <FaChevronRight />
                    </button>
                </div>

                <div>
                    <button className='btn' onClick={surpriseHandler}>
                        Surprise Me
                    </button>
                </div>
                </div>
            </div>
    )
}

export default Testinomial