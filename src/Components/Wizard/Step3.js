import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Step3 = (props) => {
//mapStateToProps
const {name, address, city, state, zip, image, mortgage, rent} = useSelector( state => state)

//dispatchToProps
const dispatch = useDispatch()


const addHouse = () => {
    axios.post(`/api/house`, {name, address, city, state, zip, image, mortgage, rent})
    .then(res => {
        dispatch({type: 'all', payload: res.data})
    }).catch(err => console.log(err))
    props.history.push('/')
}

const handleChange = (e) => {
    dispatch({type: e.target.name, payload: e.target.value})
}
console.log('Step3_props', props)

    return(
        <section>
            Step3
            <Link to ='/'>Cancel</Link>

                <label>Monthly Mortgage</label>
                <input name='SET_MORTGAGE' value={mortgage} onChange={handleChange}/>
                <label>Rent</label>
                <input name='SET_RENT' value={rent} onChange={handleChange}/>
                <button onClick={() => props.history.push('/wizard/step2')}>Previous</button>
                <button onClick={addHouse}>POST</button> 
        </section>
    )
}

export default Step3;