import React, {Component} from 'react';
import '../scss/appointment.scss';
import expand from '../img/expand.svg';

export default class Appointment extends Component {
    state={
        selDate: {}
    };
    render(){
        return (
            <div className="appointment">
                <h2>Marcações
                    <img src={expand} alt="expand"></img>
                </h2>
                <form className="appointment__form">
                    <label htmlFor="dateInput">Selecione uma data</label> 
                    <input type="date" id="dateInput"></input>
                </form>
            </div>
        );
    };
};