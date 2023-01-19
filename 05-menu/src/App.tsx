import React, {useState} from "react";
import Menu from "./Menu";
import Categories from './categories'
import data_menu from "./data";
import './scss/index.scss'
import {ICategoriesProps, TMenu} from "./models";

function getListOfCategories<T extends {category: string}>(data_menu: T[]): string[] {
    const list: string[] = ['all'];
    for (let i = 0; i < data_menu.length; i++) {
        const category: string = data_menu[i].category;
        if (!list.includes(category)) {
            list.push(category);
        }
    }
    return list;
}

function App() {
    const [menu, setMenu] = useState<TMenu[]>(data_menu);
    const [categories, setCategories] = useState<Array<string>>(getListOfCategories(data_menu));

    const filterCategory = (category: string) => {
        if (category === 'all') {
            setMenu(data_menu);
        } else {
            setMenu(data_menu.filter(item => item.category === category));
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
                <Menu menu={menu}/>
            </section>
        </main>
    )
}

export default App;