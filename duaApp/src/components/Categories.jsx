import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ category, onSelectSubcategory }) => {
    const handleSubcategorySelect = (subcategory) => {
        onSelectSubcategory(subcategory);
    };

    return (
        <div>
            <h2>{category.name}</h2>
            <ul>
                {category.subcategories.map(subcategory => (
                    <li key={subcategory.id}>
                        <NavLink to={`/subcategory/${subcategory.id}`} onClick={() => handleSubcategorySelect(subcategory)}>
                            {subcategory.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;

