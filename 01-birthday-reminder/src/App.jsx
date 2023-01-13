import React, {useState} from "react";
import data from "./data";
import List from "./list";
function App() {
    const[people, setPeople] = useState(data);

    return (
        <main>
            <section>
                <h2 className='birthdays-counter'>{people.length} birthdays today</h2>
                <List people={people}/>
                <button onClick={() => setPeople([])}>Clear All</button>
            </section>
        </main>
    )
}

export default App;