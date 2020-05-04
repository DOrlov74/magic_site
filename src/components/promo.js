import React from 'react';
import MenuButton from './menu-button';
import {Link} from 'react-router-dom';

const Promo = ({parent, price}) => {
    return (
        <div className={parent+'__promo'}>
            <h1 className={parent+'__promo__text'}>
                Massagem a partir de 
                <p className={parent+'__promo__price'}>
                    {price} &euro;
                </p>
            </h1>
            <Link to='/appointment'>
                <MenuButton parent={parent} name='promo__button' text='Marcar agora'/>
            </Link>
        </div>
    );
};

export default Promo;