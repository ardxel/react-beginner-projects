import React from "react";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

const Action = ({reviews, activeIndex, btnPrev, btnNext}) => {

    const handleChangeClass = (index) => {
        const firstIndex = 0;
        const lastIndex = reviews.length-1;

        if (index === activeIndex) {
            return 'activeSlide';
        }
        if (activeIndex === (index + 1) || (activeIndex === firstIndex && index === lastIndex)) {
            return 'prevSlide';
        }
        if (activeIndex - index >= 2 || (activeIndex <= 2 && index >= activeIndex)) {
            return 'nextSlide';
        }
    }

    return (
        <div className='section-center'>
            {reviews.map((review, index) => {
                const {image, name, title, quote} = review;
                return (
                    <article
                        key={index}
                        className={handleChangeClass(index)}
                        >
                        <img
                            src={image}
                            alt={name}
                            className='person-img'/>
                        <h4>
                            {name}
                        </h4>
                        <p className='title'>
                            {title}
                        </p>
                        <p className='text'>
                            {quote}
                        </p>
                        <FaQuoteRight className='icon'></FaQuoteRight>
                        <button
                            className='prev'
                            onClick={btnPrev}>
                            <FiChevronLeft></FiChevronLeft>
                        </button>
                        <button
                            className='next'
                            onClick={btnNext}>
                            <FiChevronRight></FiChevronRight>
                        </button>
                    </article>
                )
            })}
        </div>
    )
}

export default Action;