import React, {Component} from 'react';
import InfoBlock from '../components/info-block';
import timeImg from '../img/time.svg';
import telImg from '../img/phone.svg';
import mailImg from '../img/mail.svg';
import locImg from '../img/place.svg';
import '../scss/cards.scss';

class Cards extends Component{
    infoData=[
        {"name": "Time",
            "img": {timeImg},
            "title": "Horário:",
            "text": ["segunda a sexta-feira:", "das 8h00 ás 20h00",
            "sabados, domingos e feriados:", "a combinar"]},
        {"name": "Phone",
            "img": {telImg},
            "title": "Telefone:",
            "text": ["-"]},
        {"name": "Mail",
            "img": {mailImg},
            "title": "E-mail:",
            "text": ["magia@mailinator.com"]},
        {"name": "Location",
            "img": {locImg},
            "title": "Localização:",
            "text": ["Calçada dos Barbadinhos, 117 r/c",
            "Lisboa, São Vicente"]},
    ];
    render(){
        return (
            <div className='cards'>
                {this.infoData.map((el, i)=>
                <InfoBlock 
                key={i}
                name={el.name}
                img={Object.values(el.img)}
                title={el.title}
                text={el.text}
                parent='cards'/>)}
            </div>
        );
    };
};

export default Cards;