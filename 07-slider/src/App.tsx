import React from 'react';
import Title from './Title'
import Action from "./Action";
import {TFnVoid} from "./modules";
import useReviews from "./hooks/reviews";

function App() {
    const {reviews, activeIndex, setActiveIndex} = useReviews();
    const lastReviewIndex = reviews.length - 1;

    const handlerSelectPrev: TFnVoid = () => {
        if (activeIndex === 0) {
            setActiveIndex(lastReviewIndex);
        } else {
            setActiveIndex(activeIndex - 1);
        }
    }

    const handlerSelectNext: TFnVoid = () => {
        if (lastReviewIndex === activeIndex) {
            setActiveIndex(0);
        } else {
            setActiveIndex(activeIndex + 1);
        }
    }

    return (
        <section className='section'>
            <Title/>
            <Action
                reviews={reviews}
                activeIndex={activeIndex}
                btnPrev={handlerSelectPrev}
                btnNext={handlerSelectNext}
            />
        </section>
    )
}

export default App;
