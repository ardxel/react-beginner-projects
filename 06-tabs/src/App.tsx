import React, {useState, useEffect} from 'react'
import axios from "axios";
import Jobs from './Jobs'
import Title from "./Title";
import {TList} from "./module";

const url = 'https://course-api.com/react-tabs-project';

function App() {
    const [list, setList] = useState<TList[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchAPI = async (link: string) => {
        try {
            setIsLoading(true);
            const response = await axios.get<TList[]>(link);
            setList(response.data);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchAPI(url)
    }, []);

    if (isLoading) {
        return (
            <main>
                <h3 className='loading'>Loading...</h3>
            </main>
        )
    }

    return (
        <section className='section'>
        <Title/>
        <Jobs list={list}/>
        </section>
    )
}

export default App
