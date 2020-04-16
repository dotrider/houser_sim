import React,{ useEffect } from 'react';
import House from '../House/House';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { getHouses } from '../../redux/reducer';
import axios from 'axios';

const Dashboard = () => {
    //mapStateToProps
    const {houses} = useSelector(state => state);
   
    //dispatchToProps
    const dispatch = useDispatch()
   
    useEffect(() => {
        dispatch(getHouses())
    }, [dispatch])

    const deleteHouse = (id) => {
        axios.delete(`/api/house/${id}`).then(() => {
            alert('Success!')
        })
    }

 
    const mappedHouses = houses.map(home => <House deleteHouse={deleteHouse} key={home.id} home = {home}/>)
    return(
        <section>
            Dashboard
            <Link to='/wizard/step1'>Add New Property</Link>
            {mappedHouses}
        </section>
    )
}

export default Dashboard;