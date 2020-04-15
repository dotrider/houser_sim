import React from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';

const Dashboard = () => {

    return(
        <section>
            Dashboard
            <Link to='/wizard'>Add New Property</Link>
            <House/>
        </section>
    )
}

export default Dashboard;