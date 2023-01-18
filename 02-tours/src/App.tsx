import React, {useEffect, useState} from "react";
import Tours from './Tours'
import './scss/style.scss'
import {ITours, TypeRemoveTour, FetchTours} from "./models";

const url = 'https://course-api.com/react-tours-project';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [tours, setTours] = useState<ITours[]>([]);

    const removeTour: TypeRemoveTour = (id) => {
        setTours(tours.filter(tour => tour.id !== id));
    }

    const fetchTours: FetchTours = async (url) => {
        setIsLoading(true);

        const response = await fetch(url);
        const tours = await response.json();
        setIsLoading(false);
        setTours(tours);
    }

    useEffect(() => {
        fetchTours(url);
    }, []);

    if (isLoading) {
        return (
            <main>
                <section className='tours'>
                    <div className='loading'>
                        Loading...
                    </div>
                </section>
            </main>
    )
    }

    return (
        <Tours tours={tours} removeTour={removeTour}/>
    )
    }

    export default App