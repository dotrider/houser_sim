import React,{ useEffect } from 'react';
import House from '../House/House';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { getHouses } from '../../redux/reducer';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
    //mapStateToProps
    const {houses} = useSelector(state => state);
   
    //dispatchToProps
    const dispatch = useDispatch()
   
    useEffect(() => {
        dispatch(getHouses())
    }, [dispatch]);

    const deleteHouse = (id) => {
        axios.delete(`/api/house/${id}`).then(() => {
            alert('Success!')
        });
        dispatch(getHouses());
    }

 
    const mappedHouses = houses.map(home => <House deleteHouse={deleteHouse} key={home.id} home = {home}/>)
    return(
        <section className='dashboard'>
            <div className='heading'>
             Dashboard    
            <Link to='/wizard/step1'><span id='add'>Add New Property</span></Link>
            </div>   
                {mappedHouses}
        </section>
    )
}

export default Dashboard;