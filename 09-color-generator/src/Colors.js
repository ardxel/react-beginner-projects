import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const Colors = ({colors}) => {
    const [alert, setAlert] = useState(false);
    const [indexAlert, setIndexAlert] = useState(-1);

    const handleCopyHex = (hex, index) => {
        setIndexAlert(index);
        setAlert(true);
        navigator.clipboard.writeText(hex);
    }

    useEffect(() => {
        const timeout = setInterval(() => {
            setAlert(false);
        }, 3000);
        return clearInterval(timeout);
    }, [, indexAlert])

    return (
        <section className='colors'>
            {colors.map((color, i) => {
                const {rgb, weight} = color;
                const bcg = rgb.join(',');
                const hex = rgbToHex(...rgb);
                return (
                    <article
                        key={i}
                        className='color'
                        style={{backgroundColor: `rgb(${bcg})`}}
                        onClick={() => handleCopyHex(hex, i)}>
                        <p className='percent-value'>{weight}%</p>
                        <p className='color-value'>{hex}</p>
                        {indexAlert === i && <p className='alert'>
                            copied to clipboard
                        </p>}
                    </article>
                )
            })}
        </section>
    )
}

export default Colors
