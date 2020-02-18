import React, {Fragment} from 'react';
import clock from '../img/time_white.svg';
import mail from '../img/mail_white.svg';
import DatePicker from './date-picker';

const AppointmentForm=({display})=>{
    const visibleClass=display?'visible':'hidden';
    return (
        <Fragment>
            <form className={`appointment__form__name ${visibleClass}`}>
                <label htmlFor="nameInput">Nome</label>
                <input type="text" id="nameInput" required></input>
            </form>
            <form className={`appointment__form__mail ${visibleClass}`}>
                <label htmlFor="mailInput">E-mail</label>
                <input type="email" id="mailInput" required></input>
                <img src={mail} alt="mail"></img>
            </form>
            <form className={`appointment__form__data ${visibleClass}`}>
                <label htmlFor="dateInput">Data</label>
                <DatePicker />
            </form>
            <form className={`appointment__form__hour ${visibleClass}`}>
                <label htmlFor="hourInput">Hora</label>
                <input type="text" id="hourInput" required></input>
                <img src={clock} alt="clock"></img>
            </form>
        </Fragment>
    );
};

export default AppointmentForm;