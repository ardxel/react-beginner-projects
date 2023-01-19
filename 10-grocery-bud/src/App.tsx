import React, {ChangeEvent, createRef, FormEvent, useEffect, useRef, useState} from 'react'
import Form from "./Form";
import List from './List'
import list from './List'
import {TAlert, TEdit, TFnSubmit, TFnVoid, TFnVoidWithId, TList} from "./modules";

function getLocaleStorage(): TList[] {
    let list: TList[] = JSON.parse(localStorage.getItem('list') || '');
    if (list) {
        return list;
    } else return []
}

function App() {
    const [inputValue, setInputValue] = useState<string>('');
    const [list, setList] = useState<TList[]>(getLocaleStorage());
    const [alert, setAlert] = useState<TAlert>({show: false, msg: '', type: ''});
    const [edit, setEdit] = useState<TEdit>({isEdit: false,id: 0, title: ''});

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.currentTarget.value);
    }

    const showAlert = (show = false,msg = '', type = ''): void => {
        setAlert({show, msg, type});
    }

    const handleSubmit: TFnSubmit = (e) => {
        e.preventDefault();

        if (inputValue === '') {
            return showAlert(true, 'Please enter value', 'alert-danger');
        }
        if (edit.isEdit) {
                const item = list.find(item => item.id === edit.id);
                if (!item) {
                    throw Error('No item here. handleSubmit Error')
                }
                const currentIndex = list.indexOf(item);
                const title = inputValue;

            setList(list.map((item, i) => {
                if (i === currentIndex) {
                    return {id: item.id, title: title};
                } return item;
            }));
            showAlert(true, 'Item is changes', 'alert-success');
            return;
        }
        const result: TList = {id: +new Date().getTime().toString(), title: inputValue}

        setList([...list, result]);
        showAlert(true, 'Item Added To The List', 'alert-success');
    }

    const handleClearList: TFnVoid = () => {
        setList([]);
        showAlert(true, 'Empty list', 'alert-danger');
    }

    const deleteItem: TFnVoidWithId = (id) => {
        setList(list.filter(item => item.id !== id));
        showAlert(true, 'Item removed', 'alert-danger');
    }

    const editItem: TFnVoidWithId = (id) => {
        const item = list.find(item => item.id === id);
        if (item === undefined) {
            throw Error('No item here. editItem error')
        }
        setInputValue(item.title);
        setEdit({isEdit: true, id: id, title: item.title});
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
        setInputValue('');
        setEdit({isEdit: false, id: 0, title: ''});
    }, [list]);

    useEffect(() => {
        const timeout = setTimeout(showAlert,3000);
        return () => clearTimeout(timeout);
    }, [list])

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
