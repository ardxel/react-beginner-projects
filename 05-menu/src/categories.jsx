import React from "react";

function Categories({categories, filterCategory}) {
    return (
        <div className='categories'>
        <ul className='list_categories'>
            {categories.map(category => {
                return (
                    <li key={category}>
                        <button
                            className={`btn-${category}`}
                            onClick={() => filterCategory(category)}>
                            {category}
                        </button>
                    </li>
                )
            })}
        </ul>
        </div>
    )
}

export default Categories;