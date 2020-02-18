import React, {Component} from 'react';
import '../scss/appointment.scss';
import expand from '../img/expand_white.svg';
//import calendar from '../img/calendar_white.svg';
import AppointmentForm from '../components/appointmentForm';

export default class Appointment extends Component {
    state={
        display:false
    };
    toggleVisible=()=>{
        console.log('in toggleVisible method', this.state);
        this.setState({
            display:!this.state.display
        });
    };
    render(){
        return (
            <div className="appointment">
                <h2>Marcações
                    <img src={expand} alt="expand" onClick={this.toggleVisible}></img>
                </h2>
                <AppointmentForm display={this.state.display}/>
            </div>
        );
    };
};