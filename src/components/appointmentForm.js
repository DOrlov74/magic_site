import React, {Component} from 'react';
import clock from '../img/time_white.svg';
import mail from '../img/mail_white.svg';
import phone from '../img/phone_white.svg';
import calendar from '../img/calendar_white.svg';
import DatePicker from './date-picker';

class AppointmentForm extends Component {
    constructor(props) {
        super(props);
        this.state={displayDatePicker: false};
    };
   
    onCalendarClick=()=>{
        this.setState({displayDatePicker: true});
        console.log('in onCalendarClick', this.state);
    };
    onDateChange=(date)=>{
        const dateInput=document.querySelector('#dateInput');
        dateInput.innerHTML=date;
        this.props.onChangeDate(date);
        this.setState({displayDatePicker: false});
    };
    render(){
        const { 
            onSubmit, 
            onBlur, 
            onChange,  
            value, 
            error}=this.props;
        //const visibleFormClass=displayForm?'visible':'hidden';
        return (
            <form 
                onSubmit={onSubmit}
                className={`appointment__form`}>
                <div className={`appointment__form__name`}>
                    <label htmlFor="nameInput">Nome</label>
                    <input type="text" 
                        id="nameInput"
                        name="name" 
                        value={value.name}
                        onBlur={onBlur}
                        onChange={onChange} required>
                    </input>
                </div>
                <label className="error">
                    {error.name?error.name:""}
                </label>              
                <div className={`appointment__form__tel`}>
                    <label htmlFor="telInput">Telemóvel</label>
                    <input type="text" 
                        id="telInput"
                        name="tel" 
                        value={value.tel}
                        onBlur={onBlur}
                        onChange={onChange} required>
                    </input>
                    <img src={phone} alt="phone"></img>
                </div>
                <label className="error">
                    {error.tel?error.tel:""}
                </label>
                <div className={`appointment__form__mail`}>
                    <label htmlFor="mailInput">E-mail</label>
                    <input type="email" 
                        id="mailInput"
                        name="email" 
                        value={value.email}
                        onBlur={onBlur}
                        onChange={onChange} 
                        required>
                    </input>
                    <img src={mail} alt="mail"></img>
                </div>
                <label className="error">
                    {error.email?error.email:""}
                </label>
                <div className={`appointment__form__data`}>
                    <label htmlFor="dateInput">Data</label>
                    <label id="dateInput"
                        onClick={this.onCalendarClick}></label>
                    <img src={calendar} alt="calendar" 
                        onClick={this.onCalendarClick}></img>
                    {this.state.displayDatePicker?
                    <DatePicker 
                        onChange={this.onDateChange}/>:''}
                </div>
                <label className="error">
                    {error.date?error.date:""}
                </label>
                <div className={`appointment__form__hour`}>
                    <label htmlFor="hourInput">Hora</label>
                    <select 
                        id="hourInput" 
                        name="hour"
                        value={value.hour}
                        onBlur={onBlur}
                        onChange={onChange} required>
                            <option value=""></option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                    </select>
                    <img src={clock} alt="clock"></img>
                </div>
                <label className="error">
                    &nbsp;{error.hour?error.hour:""}
                </label>
                <button 
                    type="submit"
                    className={`appointment__form__submit-button btn`} 
                    //onClick={onSubmit}
                    >
                    Enviar
                </button>
            </form>
        );
    };
};

export default AppointmentForm;