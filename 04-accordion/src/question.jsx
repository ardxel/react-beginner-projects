import React, {useState} from "react";

function Question({title, info}) {
    const [isLocked, setIsLocked] = useState(true);

    return (
        <div className='question'>
            <div className='question_container'>
                <header>
                    <h3>{title}</h3>
                    <button
                        className='btn_showText'
                        onClick={() => setIsLocked(!isLocked)}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" t="1551322312294"
                             viewBox="0 0 1024 1024" version="1.1" height="1em" width="1em"
                             xmlns="http://www.w3.org/2000/svg">
                            <defs></defs>
                            { isLocked && <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>}
                            <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                        </svg>
                    </button>
                </header>
                {!isLocked && <p className='info'>{info}</p>}
            </div>
        </div>
    )
}

export default Question;