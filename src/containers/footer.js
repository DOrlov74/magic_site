import React, {Component} from 'react';
import Logo from '../components/logo';
import '../scss/footer.scss';
import MenuList from './menu-list';

class Footer extends Component {
    menuData=[
        {"name": "services", "text": "Serviços"},
        {"name": "gallery", "text": "Espaço"},
        {"name": "schedule", "text": "Horário"},
        {"name": "prices", "text": "Preços"},
        {"name": "contacts", "text": "Contactos"},
    ];
    render(){
    return(
            <footer className='footer'>
                <div className='footer__container-main'>
                    <Logo parent='footer'/>
                    <div className='footer__container-secondary'>
                        <MenuList parent='footer' menuData={this.menuData} />
                        <div className='footer__address'>Calçada dos Barbadinhos 117 r/c | 1170-046 Lisboa</div>
                    </div>
                    <div className='footer__copyright'>
                        &copy; Todos os direitos reservados - Centro de massagem Magia - 2020
                    </div>
                </div>
            </footer>
        );
    };
};

export default Footer;