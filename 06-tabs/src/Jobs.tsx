import React, {useState} from "react";
import Article from "./Article";

function Jobs({list}) {
    const [indexJobOnScreen, setIndexJobOnScreen] = useState(0);

    return (
        <div className='jobs-center'>
            <div className='btn-container'>
                {list.map((person, i) => {
                    const {company, id} = person;
                    return (
                        <button
                            className='job-btn'
                            key={id}
                            onClick={() => setIndexJobOnScreen(i)}>
                        {company}</button>)
                })}
            </div>
            <Article jobInfo={list[indexJobOnScreen]}/>
        </div>
    )
}

export default Jobs;