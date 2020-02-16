import React, {Component} from 'react';
import '../scss/appointment.scss';
import expand from '../img/expand_white.svg';
//import calendar from '../img/calendar_white.svg';
import clock from '../img/time_white.svg';
import DatePicker from './date-picker';

export default class Appointment extends Component {
    render(){
        return (
            <div className="appointment">
                <h2>Marcações
                    <img src={expand} alt="expand"></img>
                </h2>
                <form className="appointment__form__name">
                    <label htmlFor="nameInput">Nome</label>
                    <input type="text" required></input>
                </form>
                <form className="appointment__form__data">
                    <label htmlFor="dateInput">Data</label>
                    <DatePicker />
                </form>
                <form className="appointment__form__hour">
                    <label htmlFor="hourInput">Hora</label>
                    <input type="text" required></input>
                    <img src={clock} alt="clock"></img>
                </form>
            </div>
        );
    };
};