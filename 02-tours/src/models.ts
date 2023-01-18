export type FetchTours = (url: string) => Promise<void>
export type TypeRemoveTour = (id: number) => void

export interface ITours {
    id: number,
    image: string,
    info: string,
    name: string,
    price: string
}

export type ToursProps = {
    tours: ITours[],
    removeTour: TypeRemoveTour
}

export type TourProps = {
    id: number,
    image: string,
    price: string
    info: string,
    name: string,
    removeTour: TypeRemoveTour
}
