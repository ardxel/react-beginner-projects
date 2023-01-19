import React, {useState, useEffect} from 'react'
import Jobs from './Jobs'
import Title from "./Title";
const url = 'https://course-api.com/react-tabs-project';

function App() {
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchAPI = async (link) => {
        // try {
            setIsLoading(true);
            const response = await fetch(link);
            const data = await response.json();
            setList(data);
            setIsLoading(false);
        // } catch (e) {
        //     console.log(e);
        // }
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
