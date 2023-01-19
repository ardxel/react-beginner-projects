import React, {RefObject, useEffect} from "react";
import Alert from "./Alert";
import {TFormProps} from "./modules";

function Form ({inputChangeValue, currentValue, submit, alert}: TFormProps) {

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
                    // ref={inputRef}
                    value={currentValue || ''}
                    onChange={inputChangeValue}/>
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