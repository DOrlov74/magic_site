import React, {Component} from 'react';
import '../scss/appointment.scss';
import 'jquery-ui/themes/base/base.css';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.min.css';

export default class DatePicker extends Component {
    componentDidMount(){
        //this.$node=$(this.refs.dateInput);
        $('#datePicker').datepicker({
            autoSize: true,
            dateFormat: "yy-mm-dd",
            minDate: 0,
            maxDate: 90,
            onSelect: this.props.onChange,
            //showOn: "button",
            //buttonImage: calendar,
            //buttonImageOnly: true
        });
    };
    setDate=(date)=>{
        this.props.onSetDate(date);
    };
    shouldComponentUpdate(){
        return false;
    };
    render(){
        //const {name, value, onBlur, onChange}=this.props;
        return (
            <div id="datePicker">


            </div>
        );
    };
    componentWillUnmount(){
        //this.$node.datepicker('destroy');
        $('#dateInput').datepicker('destroy');
    };
};