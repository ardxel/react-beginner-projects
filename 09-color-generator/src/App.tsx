import React, {ChangeEvent, FormEvent, useState} from 'react'
import Colors from './Colors'
import Values from 'values.js'

function App() {
    const [color, setColor] = useState<string>('');
    const [list, setList] = useState<Values[]>(new Values('#f15025').all(10));

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        let colors: Values[] = new Values(color).all(10);
        setList(colors);
    }
    const handleChangeColor = (e: ChangeEvent<HTMLInputElement>): void => {
        setColor(e.currentTarget.value);
    }
    console.log(list);
    return (
        <>
            <section className='container'>
                <h3>color generator</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='#f15025'
                        className='error'
                        onChange={handleChangeColor}/>
                    <button
                        className='btn'
                        type='submit'>submit</button>
                </form>
            </section>
            <Colors colors={list}/>
        </>

    )
}

export default App
