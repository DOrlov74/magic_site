import React from 'react';
import clock from '../img/time_white.svg';
import mail from '../img/mail_white.svg';
import DatePicker from './date-picker';

const AppointmentForm=({display, onSubmit, onChange, onChangeDate})=>{
    const visibleClass=display?'visible':'hidden';
    return (
        <form className={`appointment__form ${visibleClass}`}>
            <div className={`appointment__form__name`}>
                <label htmlFor="nameInput">Nome</label>
                <input type="text" 
                    id="nameInput"
                    name="name" 
                    onBlur={onChange} required>
                </input>
            </div>
            <div className={`appointment__form__mail ${visibleClass}`}>
                <label htmlFor="mailInput">E-mail</label>
                <input type="email" 
                    id="mailInput"
                    name="email" 
                    onBlur={onChange} required>
                </input>
                <img src={mail} alt="mail"></img>
            </div>
            <div className={`appointment__form__data ${visibleClass}`}>
                <label htmlFor="dateInput">Data</label>
                <DatePicker name="data" 
                    onSetDate={onChangeDate}/>
            </div>
            <div className={`appointment__form__hour ${visibleClass}`}>
                <label htmlFor="hourInput">Hora</label>
                <input type="text" 
                    id="hourInput" 
                    name="hour"
                    onBlur={onChange} required>
                </input>
                <img src={clock} alt="clock"></img>
            </div>
            <button className={`appointment__form__submit-button ${visibleClass}`} 
                onClick={onSubmit}>
                Enviar
            </button>
        </form>
    );
};

export default AppointmentForm;