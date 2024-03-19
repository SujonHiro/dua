import React from 'react';

const SubCate = ({ subcategory, onSelectDua }) => {
    const handleDuaSelect = (dua) => {
        onSelectDua(dua);
    };

    return (
        <div>
            <h2>{subcategory.name}</h2>
            <ul>
                {subcategory.duas.map(dua => (
                    <li key={dua.id}>
                        <button onClick={() => handleDuaSelect(dua)}>
                            {dua.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubCate;

