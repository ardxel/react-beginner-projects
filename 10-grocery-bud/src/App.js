import React, {useState, useEffect, useRef} from 'react'
import Form from "./Form";
import List from './List'
import list from "./List";

function getLocaleStorage() {
    let list = localStorage.getItem('list');
    if (list) {
        return (list = JSON.parse(localStorage.getItem('list')));
    } else {
        return [];
    }
}

function App() {
    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState(getLocaleStorage());
    const [alert, setAlert] = useState({show: false, msg: '', type: ''});
    const [edit, setEdit] = useState({isEdit: false,id: 0, title: ''});
    const inputRef = useRef(null);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const showAlert = (show = false,msg = '', type = '') => {
        setAlert({show, msg, type});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue === '') {
            return showAlert(true, 'Please enter value', 'alert-danger');
        }
        if (edit.isEdit) {
            const item = list.find(item => item.id === edit.id);
            const currentIndex = list.indexOf(item);
            const title = inputValue;
            
            setList(list.map((item, i) => {
                if (i === currentIndex) {
                    const modifyItem = {id: item.id, title: title}
                    return modifyItem;
                } return item;
            }));
            showAlert(true, 'Item is changes', 'alert-success');
            return;
        }
        const result = {id: new Date().getTime().toString(), title: inputValue}

        setList([...list, result]);
        showAlert(true, 'Item Added To The List', 'alert-success');
    }

    const handleClearList = () => {
        setList([]);
        showAlert(true, 'Empty list', 'alert-danger');
    }

    const deleteItem = (id) => {
        setList(list.filter(item => item.id !== id));
        showAlert(true, 'Item removed', 'alert-danger');
    }

    const editItem = (id) => {
        const item = list.find(item => item.id === id);
        console.log(item);
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
                inputRef={inputRef}
                inputValue={handleChange}
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
