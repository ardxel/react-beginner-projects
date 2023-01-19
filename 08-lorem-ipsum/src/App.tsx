import React, {useState, ChangeEvent, FormEvent} from 'react';
import data from './data';

function App() {
    const [text, setText] = useState<string[]>(data);
    const [count, setCount] = useState<number>(0);
    const [showedText, setShowedText] = useState<JSX.Element[]>([]);

    const handleChangeCount = (e: ChangeEvent<HTMLInputElement>): void => {
        setCount(+e.currentTarget.value);
    }

    const handleShowText = (): void => {
        let amount: number;
        if (+count <= 0) amount = 1;
        else amount = count;

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
            <form className='lorem-form' onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}>
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
