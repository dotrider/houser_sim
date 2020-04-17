import React from 'react';
import {Link} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import './Wizard.css';


const Wizard = () => {


    return(
        <section className='wizard'>
            <div className='heading'>
                Add New Listing
                <Link to='/'><span id='cancel'>Cancel</span></Link>
            </div>
            <Route path = '/wizard/step1' component ={Step1}/>
            <Route path = '/wizard/step2' component ={Step2}/>
            <Route path = '/wizard/step3' component ={Step3}/>
        </section>
    )
}

export default Wizard;
