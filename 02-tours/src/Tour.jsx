import React, {useState} from "react";

function Tour(props) {
    const [readMore, setReadMore] = useState(false);
    return (
        <article className='tour'>
            <img src={props.image} alt='' className='tour_image'/>
            <div className='tour_container'>
                <div className='tour_info'>
                    <h4 className='tour_name'>{props.name}</h4>
                    <h4 className='tour_price'>${props.price}</h4>
                </div>
                <p className='tour_text'>
                    {readMore ? props.info : props.info.substring(0, 200) + '... '}
                    <button className='tour_showText' onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'Show less' : 'Read more'}
                    </button>
                </p>
                <button className='tour_delete'
                        onClick={() => props.removeTour(props.id)}>Not interested</button>
            </div>
        </article>
    )
}

export default Tour;