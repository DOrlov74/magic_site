import React, {Component} from 'react';
import '../scss/appointment.scss';
import expand from '../img/expand_white.svg';
//import calendar from '../img/calendar_white.svg';
import AppointmentForm from '../components/appointmentForm';
import {db} from '../components/firebase';
import ReactFormInputValidation from 'react-form-input-validation';

export default class Appointment extends Component {
    constructor(props) {
        super(props);
        this.state={
            formDisplay:false,
            fields: {
                name: "",
                email: "",
                date: "",
                hour: ""
            },
            errors: {}
        };
        this.form=new ReactFormInputValidation(this, { locale: "pt" });
        this.form.useRules({
            name: "required|min:4|max:30",
            email: "required|email",
            date: "required",
            hour: "required"
        });
        
        //onSubmitForm=(e)=>{
        this.form.onformsubmit = (fields) => {
            //fields.preventDefault();
            console.log('in onSubmit method', fields);
            const {errors}=this.state.errors;
            console.log('Errors: ', errors);
            let formValid=false;
                // if(errors){
                //     formValid=false;
                // } else {
                //     formValid=true;
                // }
            if (formValid){
                const form=document.querySelector('.appointment__form');
                //add a document to collection
                db.collection('bookings').add({
                    name: this.state.fields.name,
                    email: this.state.fields.email,
                    date: this.state.fields.date,
                    hour: this.state.fields.hour
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
    };
    toggleVisible=()=>{
        console.log('in toggleVisible method', this.state);
        this.setState({
            formDisplay:!this.state.formDisplay
        });
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
            fields:{
                ...this.state.fields,
                [name]:value
            }
        });
        console.log('in onChangeField method', this.state);
    };
    onChangeDate=(date)=>{
        this.setState({
            ...this.state,
            fields:{
                ...this.state.fields,
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
                    displayForm={this.state.formDisplay} 
                    onSubmit={this.form.handleSubmit}
                    //onSubmit={this.onSubmitForm}
                    // onChange={this.onChangeField}
                    onChangeDate={this.onChangeDate}
                    onBlur={this.form.handleBlurEvent}
                    onChange={this.form.handleChangeEvent}
                    value={this.state.fields}
                    error={this.state.errors}/>
            </div>
        );
    };
};