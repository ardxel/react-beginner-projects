import React, {useEffect} from "react";
import Alert from "./Alert";

function Form ({currentValue,inputValue, submit, inputRef, alert}) {
    useEffect(() => {
        inputRef.current.value = currentValue;
    }, [currentValue])
    return (
        <form
            className='grocery-form'
            onSubmit={submit}>
            {alert.show && <Alert alert={alert}/>}
            <h3>grocery bud</h3>
            <div className='form-control'>
                <input
                    type='text'
                    className='grocery'
                    placeholder='e.g. eggs'
                    ref={inputRef}
                    onChange={inputValue}/>
                <button
                    type='submit'
                    className='submit-btn'>
                    Submit
                </button>
            </div>
        </form>
    )
}

export default Form;