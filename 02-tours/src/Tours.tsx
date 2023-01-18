import React from "react";
import Tour from "./Tour"
import {ToursProps} from "./models";

function Tours({tours, removeTour}: ToursProps) {

    return (
        <main>
            <section className='tours'>
                <div className='title'>
                    <h1 className='title_text'>Our Tours</h1>
                    <div className='title_underline'></div>
                </div>
                {tours.map(tour => {
                    return <Tour
                        key={tour.id}
                        {...tour}
                        removeTour={removeTour}/>
                })}
            </section>
        </main>
    )
}

export default Tours;