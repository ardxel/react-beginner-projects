import {useEffect, useState} from "react";
import {TPeople} from "../modules";
import data from "../data";

export default function useReviews() {
    const [reviews, setReviews] = useState<TPeople[]>(data);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const lastReviewIndex = reviews.length-1;

    const changeActiveIndex = (index: number): number => {
        if (index === lastReviewIndex) {
            return 0;
        } else {
            return index+1;
        }
    }

    useEffect(() => {
        let slider = setInterval(() => {
            setActiveIndex(changeActiveIndex(activeIndex));
        }, 3000);
        return () => {
            clearInterval(slider);
        }
    }, [activeIndex])

    return {reviews, activeIndex, setActiveIndex};
}