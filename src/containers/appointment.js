import React, {Component} from 'react';
import '../scss/appointment.scss';
import expand from '../img/expand_white.svg';
//import calendar from '../img/calendar_white.svg';
import AppointmentForm from '../components/appointmentForm';
import {db} from '../components/firebase';

export default class Appointment extends Component {
    state={
        formDisplay:false,
        appointment: {},
        errors: {}
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
        const {errors}=this.state.errors;
        let formValid=false;
        Object.values(errors).forEach(val=>{
            if(val.length>0){
                formValid=false;
            } else {
                formValid=true;
            }
        });
        if (formValid){
            const form=document.querySelector('.appointment__form');
            //add a document to collection
            db.collection('bookings').add({
                name: this.state.appointment.name,
                email: this.state.appointment.email,
                date: this.state.appointment.date,
                hour: this.state.appointment.hour
            }).then(()=>{
                //close the modal and reset form
                console.log('Document successfully written!');
                form.reset();
            }).catch(err=>{
                console.log('Error writing document:', err.message);
            });
        } else {
            console.log('form is not valid');
        };
    };
    onChangeField=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        if (value===""){
            this.setState({
                ...this.state,
                errors:{
                    ...this.state.errors,
                    [name]:'please fill this field'
                }
            });
        } else {
            this.setState({
                ...this.state,
                errors:{
                    ...this.state.errors,
                    [name]:''
                }
            });
        };
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