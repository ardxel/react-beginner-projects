import React, {useEffect, useState} from "react";
import Tours from './Tours'
import './scss/style.scss'

const url = 'https://course-api.com/react-tours-project';

function App() {
    const [isloading, setIsLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const removeTour = (id) => {
        setTours(tours.filter(tour => tour.id !== id));
    }

    const fetchTours = async (url) => {
        setIsLoading(true);

        const response = await fetch(url);
        const tours = await response.json();
        setIsLoading(false);
        setTours(tours);
    }

    useEffect(() => {
        fetchTours(url);
    }, []);

    if (isloading) {
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