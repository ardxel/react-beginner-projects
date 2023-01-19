import React from 'react'
import Form from "./Form";
import List from './List'
import {useList} from "./hooks/hook_list";


function App() {
    const {list, inputValue, alert, HANDLERS} = useList();
    const [handleSubmit, handleClearList, handleChange, deleteItem, editItem] = HANDLERS
    return (
        <section className='section-center'>
            <Form
                currentValue={inputValue}
                alert={alert}
                inputChangeValue={handleChange}
                submit={handleSubmit}/>
            {list.length > 0 && <List
                list={list}
                clearAll={handleClearList}
                deleteItem={deleteItem}
                editItem={editItem}/>}

        </section>
    )
}

export default App
