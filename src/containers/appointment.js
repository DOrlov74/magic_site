import React, {Component, useContext} from 'react';
import '../scss/appointment.scss';
import expand from '../img/expand_white.svg';
//import calendar from '../img/calendar_white.svg';
import AppointmentForm from '../components/appointmentForm';
import SignInForm from '../components/signin-form';
import {db} from '../components/firebase';
import ReactFormInputValidation from 'react-form-input-validation';
import {signUp, logIn} from '../components/auth';
import {auth} from '../components/firebase';
import {UserContext} from '../components/user-provider';

export default class Appointment extends Component {
    constructor(props) {
        super(props);
        this.state={
            mode: "signup",
            fields: {
                name: "",
                tel: "",
                email: "",
                password: "",
                //password_confirmation: "",
                date: "",
                hour: ""
            },
            errors: {}
        };
        this.form=new ReactFormInputValidation(this, { locale: "pt" });
        this.form.useRules({
            name: "required|min:4|max:30",
            tel: ['required', 'regex:/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g'],
            email: "required|email",
            password: "required|min:6|max:30",
            //password_confirmation: "required|min:6|max:30",
            date: "required",
            hour: "required"
        });
        
        //onSubmitForm=(e)=>{
        this.form.onformsubmit = (fields) => {
            //fields.preventDefault();
            console.log('in onSubmit method', fields);
            /* const {errors}=this.state.errors;
            console.log('Errors: ', errors);
            let formValid=true;
            Object.entries(fields).forEach(field=>{
                field[1].length>0 || (formValid=false);
                if (!field[1].length>0){
                    const name=field[0];
                    this.setState({
                        ...this.state,
                        errors:{
                            ...this.state.errors,
                            [name]:'please fill this field'
                        }
                    });
                }
            }); */
            //if (formValid){
                const form=document.querySelector(`.${this.state.mode}__form`);
                const {name, email, password} = this.state.fields;
                switch (this.state.mode){
                    case "signup":
                        {const error= signUp(name, email, password);
                        this.setState({
                            ...this.state,
                            errors:{
                                ...this.state.errors,
                                [password]:error
                                }
                            });
                        console.log(this.state);
                        }
                        /* {auth.createUserWithEmailAndPassword(email, password)
                        .then((user)=>{
                            console.log(user);
                        })
                        .catch(err=>{
                            console.log(err.message);
                        });} */
                        break;
                    case "login":
                        logIn(email, password);
                        break;
                    case "appointment":
                        {};
                        break;
                    default:
                        {};
                };

                //console.log('form is valid', formValid);
                //add a document to collection
                /* db.collection('bookings').add({
                    name: this.state.fields.name,
                    tel: this.state.fields.tel,
                    email: this.state.fields.email,
                    date: this.state.fields.date,
                    hour: this.state.fields.hour
                }).then(()=>{
                    //close the modal and reset form
                    console.log('Document successfully written!');
                    form.reset();
                }).catch(err=>{
                    console.log('Error writing document:', err.message);
                }); */
            /* } else {
                console.log('form is not valid', formValid);
            }; */
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
            },
            errors:{
                ...this.state.errors,
                date:''
            }
        });
    };

    onSetSignup=()=>{
        if (this.state.mode!=='signup'){
            this.setState({
                ...this.state,
                mode:'signup'});
        };
    };

    onSetLogin=()=>{
        if (this.state.mode!=='login'){
            this.setState({
                ...this.state,
                mode:'login'});
        };
    };

    switchComp(){
        const classMode=this.state.mode;
        let title="";
        let Comp={};
        switch (classMode) {
            case "signup":
                title="Inscreve-se, por favor";
                Comp=SignInForm;
            break;
            case "login":
                title="Conecte-se, por favor";
                Comp=SignInForm;
            break;
            case "appointment":
                const {user}=this.props;
                title=`${user.displayName}, escolha a data, por favor`;
                Comp=AppointmentForm;
            break;
            default:
                title="Mode error";
        };
            return (
                    {title, Comp}
            );
    };
    componentDidMount(){
        const {user}=this.props;
        console.log('in component did mount', user);
         if (user!==undefined) {
            this.setState({
                ...this.state,
                mode:'appointment'});
        } else {
            this.setState({
                ...this.state,
                mode:'signup'});
        }; 
    };

    render(){
        const {title, Comp}=this.switchComp();
        const classMode=this.state.mode;
        return (
            <div className={classMode}>
                <h2>{title}</h2>
                <Comp 
                    //displayForm={this.state.formDisplay} 
                    onSubmit={this.form.handleSubmit}
                    //onSubmit={this.onSubmitForm}
                    // onChange={this.onChangeField}
                    onChangeDate={this.onChangeDate}
                    onBlur={this.form.handleBlurEvent}
                    onChange={this.form.handleChangeEvent}
                    value={this.state.fields}
                    error={this.state.errors}
                    mode={this.state.mode}
                    onSetSignup={this.onSetSignup}
                    onSetLogin={this.onSetLogin}/>
            </div>
        );
    };
};