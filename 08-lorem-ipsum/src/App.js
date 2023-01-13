import React, {useState} from 'react';
import data from './data';

function App() {
    const [text, setText] = useState(data);
    const [count, setCount] = useState(0);
    const [showedText, setShowedText] = useState([]);

    const handleChangeCount = (e) => {
        setCount(e.target.value);
    }

    const handleShowText = () => {
        let amount;
        if (+count <= 0) amount = 1;
        else amount = +count;

        const output = text
            .slice(0, amount)
            .map((item, index) => {
                return (
                    <p key={index}>{item}</p>
                )
            })
        setShowedText(output);
    }

    return (
        <section className='section-center'>
            <h3>tired of boring lorem ipsum?</h3>
            <form className='lorem-form' onSubmit={(e) => e.preventDefault()}>
                <label>
                    Paragraphs:
                    <input
                        type='number'
                        id='amount'
                        value={count}
                        onChange={handleChangeCount}/>
                </label>
                <button
                    className='btn'
                    onClick={handleShowText}>
                    generate
                </button>
            </form>
            <article className='lorem-text'>
                {showedText}
            </article>
        </section>
    )
}

export default App;
