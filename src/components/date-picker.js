import React, {Component} from 'react';
import '../scss/appointment.scss';
import 'jquery-ui/themes/base/base.css';
//import expand from '../img/expand.svg';
import calendar from '../img/calendar_white.svg';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.min.css';

export default class DatePicker extends Component {
    componentDidMount(){
        //this.$node=$(this.refs.dateInput);
        $('#dateInput').datepicker({
            autoSize: true,
            dateFormat: "yy-mm-dd",
            minDate: 0,
            maxDate: 90,
            onSelect: this.setDate,
            showOn: "button",
            buttonImage: calendar,
            buttonImageOnly: true
        });
    };
    setDate=(date)=>{
        this.props.onSetDate(date);
    };
    shouldComponentUpdate(){
        return false;
    };
    render(){
        return (
            <div className="datePicker">
                <input type="text" id="dateInput" required></input>
            </div>
        );
    };
    componentWillUnmount(){
        //this.$node.datepicker('destroy');
        $('#dateInput').datepicker('destroy');
    };
};