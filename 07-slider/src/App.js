import React, { useState, useEffect } from 'react';
import data from './data';
import Title from './Title'
import Action from "./Action";
function App() {
    const [reviews, setReviews] = useState(data);
    const [activeIndex, setActiveIndex] = useState(0);

    const changeActiveIndex = (index) => {
        const lastReviewIndex = reviews.length-1;

        if (index === lastReviewIndex) {
            return 0;
        } else {
            return index+1;
        }
    }

    useEffect(() => {
        let slider = setInterval(() => {
            setActiveIndex(changeActiveIndex(activeIndex));
        }, 5000);
        return () => {
            clearInterval(slider);
        }
    }, [activeIndex])

    const handlerSelectPrev = () => {
        const lastReviewIndex = reviews.length-1;

        if (activeIndex === 0) {
            setActiveIndex(lastReviewIndex);
        } else {
            setActiveIndex(activeIndex-1);
        }
    }

    const handlerSelectNext = () => {
        const lastReviewIndex = reviews.length-1;

        if (lastReviewIndex === activeIndex) {
            setActiveIndex(0);
        } else {
            setActiveIndex(activeIndex+1);
        }
    }

  return (
      <section className='section'>
        <Title reviews={reviews}/>
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
