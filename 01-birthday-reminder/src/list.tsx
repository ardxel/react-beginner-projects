import React from "react";
import {Item, TProps} from "./models/types";

function List ({people}: TProps) {
    return(
        <>
            {people.map((person: Item) => {
                const {id, name, age, image} = person;

                return (
                    <article key={id} className='person'>
                        <img alt='' src={image}/>
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                )

            })}
        </>
    )
}

export default List;