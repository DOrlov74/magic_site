import React, {Component} from 'react';
import '../scss/appointment.scss';
import expand from '../img/expand_white.svg';
//import calendar from '../img/calendar_white.svg';
import AppointmentForm from '../components/appointmentForm';

export default class Appointment extends Component {
    state={
        formDisplay:false,
        appointment: {}
    };
    toggleVisible=()=>{
        console.log('in toggleVisible method', this.state);
        this.setState({
            formDisplay:!this.state.formDisplay
        });
    };
    onSubmitForm=(e)=>{
        e.preventDefault();
        console.log('in onSubmit method', this.state);
    };
    onChangeField=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        this.setState({
            ...this.state,
            appointment:{
                ...this.state.appointment,
                [name]:value
            }
        });
        console.log('in onChangeField method', this.state);
    };
    onChangeDate=(date)=>{
        this.setState({
            ...this.state,
            appointment:{
                ...this.state.appointment,
                date:date
            }
        });
    };

    render(){
        return (
            <div className="appointment">
                <h2>Marcações
                    <img src={expand} alt="expand" onClick={this.toggleVisible}></img>
                </h2>
                <AppointmentForm 
                    display={this.state.formDisplay} 
                    onSubmit={this.onSubmitForm}
                    onChange={this.onChangeField}
                    onChangeDate={this.onChangeDate}/>
            </div>
        );
    };
};