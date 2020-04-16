import React from 'react';
import {Switch , Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';

export default (
    <Switch>
        <Route exact path = '/' component = {Dashboard}/>
        {/* <Route path = '/wizard' component = {Wizard}/> */}
        <Route path = '/wizard/step1' component ={Wizard}/>
        <Route path = '/wizard/step2' component ={Wizard}/>
        <Route path = '/wizard/step3' component ={Wizard}/>

        
    </Switch>
)