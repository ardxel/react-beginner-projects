import React, {useEffect, useState} from "react";
import Question from "./question";
import './scss/index.scss'
import questions from "./data.js";

function App() {

    return (
        <section className='container'>
            <div className='main'>
                <div className='main_container'>
                    <div className='title left'>
                        <h1>Questions And Answers About Login</h1>
                    </div>
                    <article className='questions_container'>
                        {questions.map(question => {
                            const {id, title, info} = question;
                            return <Question
                                key={id}
                                title={title}
                                info={info}/>
                        })}
                    </article>
                </div>

            </div>
        </section>
    )
}

export default App;