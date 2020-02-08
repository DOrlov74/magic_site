import React, {Component} from 'react';
import Logo from '../components/logo';
import '../scss/header.scss';
import MenuList from './menu-list';

class Header extends Component {
    menuData=[
        {"name": "services", "text": "Serviços"},
        {"name": "gallery", "text": "Espaço"},
        {"name": "schedule", "text": "Horário"},
        {"name": "prices", "text": "Preços"},
        {"name": "contacts", "text": "Contactos"},
    ];
    render(){
    return(
            <header className='header'>
                <Logo parent='header'/>
                <MenuList parent='header' menuData={this.menuData} />
            </header>
        );
    };
};

export default Header;