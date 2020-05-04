import React, {Component} from 'react';
import Logo from '../components/logo';
import '../scss/header.scss';
import MenuList from './menu-list';

class Header extends Component {
    menuData=[
        {"name": "home", "text": "Home", "link": "/"},
        {"name": "services", "text": "Serviços", "link": "/"},
        {"name": "gallery", "text": "Espaço", "link": "/"},
        {"name": "schedule", "text": "Horário", "link": "/"},
        {"name": "prices", "text": "Preços", "link": "/"},
        {"name": "contacts", "text": "Contactos", "link": "/"},
    ];
    render(){
    return(
            <header className='header'>
                <div className='header__container'>
                    <Logo parent='header'/>
                    <MenuList parent='header' menuData={this.menuData} />
                </div>
            </header>
        );
    };
};

export default Header;