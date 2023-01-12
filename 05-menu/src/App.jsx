import React, {useState} from "react";
import Menu from "./Menu";
import Categories from './categories'
import items from "./data";
import './scss/index.scss'

const allCategories = ['all', ...new Set(items.map(item => item.category))];

function App() {
    const [menu, setMenu] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterCategory = (category) => {
        if (category === 'all') {
            setMenu(items);
        } else {
            setMenu(items.filter(item => item.category === category));
        }
    }

    return (
        <main>
            <section className='menu'>
                <div className='title'>
                    <h1>Our Menu</h1>
                    <div className='title_underline'></div>
                </div>
                <Categories
                    categories={categories}
                    filterCategory={filterCategory}/>
                <Menu items={menu}/>
            </section>
        </main>
    )
}

export default App;