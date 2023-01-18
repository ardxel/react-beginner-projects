import React, {useState} from "react";
import {TourProps} from "./models";
function Tour({id, image, info, name, price, removeTour}: TourProps) {
    const [readMore, setReadMore] = useState(false);
    return (
        <article className='tour'>
            <img src={image} alt='' className='tour_image'/>
            <div className='tour_container'>
                <div className='tour_info'>
                    <h4 className='tour_name'>{name}</h4>
                    <h4 className='tour_price'>${price}</h4>
                </div>
                <p className='tour_text'>
                    {readMore ? info : info.substring(0, 200) + '... '}
                    <button className='tour_showText' onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'Show less' : 'Read more'}
                    </button>
                </p>
                <button className='tour_delete'
                        onClick={() => removeTour(id)}>Not interested</button>
            </div>
        </article>
    )
}

export default Tour;