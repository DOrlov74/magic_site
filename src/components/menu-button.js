import React from 'react';

const MenuButton=({parent, name, text})=>{
    return (
        <div className={parent+'__'+name}>{text}</div>
    );
};

export default MenuButton;