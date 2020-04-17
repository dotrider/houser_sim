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
        <section className='steps'>
                <div className='info'>
                <p>Name:</p>
                <input name='name' value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div className='info'>
                <p>Address:</p>
                <input name='address' value={address} onChange={e => setAddress(e.target.value)}/>
                </div>
                <div className='info'>
                <p>City:</p>
                <input name='city' value={city} onChange={e => setCity(e.target.value)}/>
                </div>
                <div className='info'>
                <p>State:</p>
                <input name='state' value={state} onChange={e => setState(e.target.value)}/>
                </div>
                <div className='info'>
                <p>Zipcode:</p>
                <input name='zip' value={zip} onChange={e => setZip(e.target.value)}/>
                </div>
                <span className='next' onClick={() => {
                   dispatch(updateInfo({name, address, city, state, zip}))
                    props.history.push('/wizard/step2')}}>Next</span>
        </section>
    )
}

export default Step1;