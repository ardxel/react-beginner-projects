import React from "react";
import Tour from "./Tour"

function Tours({tours, removeTour} ) {

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
                        id={tour.id}
                        image={tour.image}
                        info={tour.info}
                        name={tour.name}
                        price={tour.price}
                        removeTour={removeTour}/>
                })}
            </section>
        </main>
    )
}

export default Tours;