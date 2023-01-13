import React, {useEffect, useState} from 'react'
import Colors from './Colors'

import Values from 'values.js'

function App() {
    const [color, setColor] = useState('');
    const [list, setList] = useState(new Values('#f15025').all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        let colors = new Values(color).all(10);
        setList(colors);
    }

    return (
        <>
            <section className='container'>
                <h3>color generator</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='#f15025'
                        className='error'
                        onChange={(e) => setColor(e.target.value)}/>
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
