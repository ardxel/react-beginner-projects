import _ from 'lodash';
import React, {useEffect, useState} from "react";
import data from "./data";
import Reviews from './reviews';
import './scss/index.scss';
// const genDataElems = (data) => {
//     return data.map(person => {
//         return person;
//     })
// }

function App() {
    const [reviews, setReviews] = useState(data);
    const [onScreen, setOnScreen] = useState(reviews[0]);

    if (!data) {
        setReviews([]);
    }

    const showNext = () => {
        if (reviews.indexOf(onScreen) === reviews.length-1) {
            setOnScreen(reviews[0]);
        } else {
            setOnScreen(reviews[reviews.indexOf(onScreen) + 1]);
        }
    }
    const showPrev = () => {
        if (reviews.indexOf(onScreen) === 0) {
            setOnScreen(reviews[reviews.length-1])
        } else {
            setOnScreen(reviews[reviews.indexOf(onScreen)-1])
        }
    }
    const showRandom = () => {
        const index = _.random(0,3);
        if (index === reviews.indexOf(onScreen)) {
            return showRandom();
        }
        setOnScreen(reviews[index]);
    }
    return (
        <main>
            <div className='title'>
                <h1 className='title_text'>Our Reviews</h1>
                <div className='title_underline'></div>
            </div>
            <section className='reviews_container'>
                <Reviews review={onScreen}/>
                <div className='review_buttons'>
                    <button
                        className='review_btn_prev'
                        onClick={showPrev}>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 320 512"
                            height="1.2em"
                            width="1.2em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                        </svg>
                    </button>
                    <button
                        className='review_btn_next'
                        onClick={showNext}>
                        <svg stroke="currentColor"
                             fill="currentColor"
                             strokeWidth="0"
                             viewBox="0 0 320 512"
                             height="1.2em"
                             width="1.2em"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                        </svg>
                    </button>
                </div>
                <button
                    className='review_btn_random'
                    onClick={showRandom}>
                    Suprise me
                </button>
            </section>
        </main>
    )
}

export default App;