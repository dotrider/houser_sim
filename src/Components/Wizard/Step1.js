import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateInfo} from '../../redux/reducer';


const Step1 = (props) => {
    const [name, setName] = useState(''),
            [address, setAddress] = useState(''),
            [city, setCity] = useState(''),
            [state, setState] = useState(''),
            [zip, setZip] = useState(0)


//mapStateToProps
// const {name, address, city, state, zip} = useSelector( state => state)

//dispatchToProps
const dispatch = useDispatch()





    return(
        <section>
            <Link to ='/'>Cancel</Link>


                <label>Name:</label>
                <input name='name' value={name} onChange={e => setName(e.target.value)}/>
                <label>Address:</label>
                <input name='address' value={address} onChange={e => setAddress(e.target.value)}/>
                <label>City:</label>
                <input name='city' value={city} onChange={e => setCity(e.target.value)}/>
                <label>State:</label>
                <input name='state' value={state} onChange={e => setState(e.target.value)}/>
                <label>Zipcode:</label>
                <input name='zip' value={zip} onChange={e => setZip(e.target.value)}/>
                <button onClick={() => props.history.push('/wizard/1')}>Previous</button>
                <button onClick={() => {
                   dispatch(updateInfo({name, address, city, state, zip}))
                    props.history.push('/wizard/step2')}}>Next</button>
        </section>
    )
}

export default Step1;