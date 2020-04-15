import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';


const Wizard = () => {
//mapStateToProps
const {name, address, city, state, zip, image, mortgage, rent} = useSelector( state => state)

//dispatchToProps
const dispatch = useDispatch()

const handleChange = (e) => {
    dispatch({type: e.target.name, payload: e.target.value})
}

    return(
        <section>
            Wizard
            <Link to ='/'>Cancel</Link>

            <div>
                <label>Name:</label>
                <input name='SET_NAME' value={name} onChange={handleChange}/>
                <label>Address:</label>
                <input name='SET_ADDRESS' value={address} onChange={handleChange}/>
                <label>City:</label>
                <input name='SET_CITY' value={city} onChange={handleChange}/>
                <label>State:</label>
                <input name='SET_STATE' value={state} onChange={handleChange}/>
                <label>Zipcode:</label>
                <input name='SET_ZIP' value={zip} onChange={handleChange}/>
                <Link to ='/'>Cancel</Link>
                <Link to ='/wizard/1'>Next</Link>
            </div>
            <div>
                <label>Image URL</label>
                <input name='SET_IMAGE' value={image} onChange={handleChange}/>
                <Link to ='/'>Cancel</Link>
                <Link to ='/wizard/2'>Next</Link>
            </div>
            <div>
                <label>Monthly Mortgage</label>
                <input name='SET_MORTGAGE' value={mortgage} onChange={handleChange}/>
                <label>Rent</label>
                <input name='SET_RENT' value={rent} onChange={handleChange}/>
                <Link to ='/'>Cancel</Link>
            </div>
        </section>
    )
}

export default Wizard;