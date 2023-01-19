export type TPeople = {
    id: number,
    image: string,
    name: string,
    title: string,
    quote: string
}

export type TFnVoid = () => void;

type slides = 'activeSlide' | 'prevSlide' | 'nextSlide';

export type TFnSlides = (index: number) => slides

export interface IActionProps {
    reviews: TPeople[]
    activeIndex: number,
    btnPrev: TFnVoid,
    btnNext: TFnVoid,
}
