import React from 'react';
import MenuButton from '../components/menu-button';

const MenuList=({parent, menuData})=>{
    const menuListName=parent+'__menu';
    return (
        <div className={menuListName}>
            {menuData.map((btn, i)=>
                    <MenuButton 
                    key={i} 
                    name={btn.name} 
                    text={btn.text} 
                    link={btn.link}
                    parent={menuListName}/>
            )}
        </div>
    );
};

export default MenuList;