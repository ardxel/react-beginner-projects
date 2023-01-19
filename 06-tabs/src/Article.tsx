import React from "react";
import { FaAngleDoubleRight } from 'react-icons/fa'
import {IArticleProps} from "./module";

function Article({jobInfo}: IArticleProps) {
    return (
        <article className='job-info'>
            <h3>{jobInfo.title}</h3>
            <h4>{jobInfo.company}</h4>
            <p className='job-date'>
                {jobInfo.dates}
            </p>
            {jobInfo.duties.map((duty, i) => {
                return (
                    <div className='job-desc' key={i.toString()}>
                        <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                        <p>{duty}</p>
                    </div>
                )
            })}
        </article>
    )
}

export default Article;