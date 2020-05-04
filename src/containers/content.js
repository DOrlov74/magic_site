import React from 'react';
import Appointment from './appointment';
import Promo from '../components/promo';
import '../scss/content.scss';
import { Route, Switch } from 'react-router-dom';

const Content=()=>{
    return (
        <div className='content'>
            <Switch>
                <Route exact path='/'>
                    <Promo parent='content' price='25'/>
                </Route>
                <Route exact path='/appointment'>
                    <Appointment/>
                </Route>
            </Switch>
        </div>
    );
};

export default Content;