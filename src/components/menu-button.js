import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/btn.scss';

const MenuButton=({parent, name, text, link})=>{
    if (!link) {
        return (
            <div className={'btn '+parent+'__'+name}>
                {text}
            </div>
        );
    } else {
        return (
            <div className={'btn '+parent+'__'+name}>
                    <Link to={link}>{text}</Link>
            </div>
        );
    }
};

export default MenuButton;