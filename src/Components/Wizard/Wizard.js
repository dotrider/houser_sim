import React from 'react';
import {Link} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';



const Wizard = (props) => {


    return(
        <section>
            Wizard
            <Link to ='/'>Cancel</Link>

            <Route path = '/wizard/step1' component ={Step1}/>
            <Route path = '/wizard/step2' component ={Step2}/>
            <Route path = '/wizard/step3' component ={Step3}/>

        </section>
    )
}

export default Wizard;


// import React from 'react';
// import {useSelector, useDispatch} from 'react-redux';
// import {Link} from 'react-router-dom';
// import axios from 'axios';


// const Wizard = (props) => {
// //mapStateToProps
// const {name, address, city, state, zip, image, mortgage, rent} = useSelector( state => state)

// //dispatchToProps
// const dispatch = useDispatch()

// const addHouse = () => {
//     axios.post(`/api/house`, {name, address, city, state, zip, image, mortgage, rent})
//     .then(res => {
//         dispatch({type: name, payload: res.data})
//     }).catch(err => console.log(err))
//     props.history.push('/')
// }

// const handleChange = (e) => {
//     dispatch({type: e.target.name, payload: e.target.value})
// }
// console.log('props', props)

//     return(
//         <section>
//             Wizard
//             <Link to ='/'>Cancel</Link>

//             <div>
//                 <label>Name:</label>
//                 <input name='SET_NAME' value={name} onChange={handleChange}/>
//                 <label>Address:</label>
//                 <input name='SET_ADDRESS' value={address} onChange={handleChange}/>
//                 <label>City:</label>
//                 <input name='SET_CITY' value={city} onChange={handleChange}/>
//                 <label>State:</label>
//                 <input name='SET_STATE' value={state} onChange={handleChange}/>
//                 <label>Zipcode:</label>
//                 <input name='SET_ZIP' value={zip} onChange={handleChange}/>
//                 {/* <button onClick={props.history.goBack()}>Previous</button> */}
//                 {/* <Link to ='/wizard/2'>Next</Link> */}
//             </div>

//             <div>
//                 <label>Image URL</label>
//                 <input name='SET_IMAGE' value={image} onChange={handleChange}/>
//                 {/* <button onClick={props.history.goBack()}>Previous</button>
//                 <Link to ='/wizard/3'>Next</Link> */}
//             </div>

//             <div>
//                 <label>Monthly Mortgage</label>
//                 <input name='SET_MORTGAGE' value={mortgage} onChange={handleChange}/>
//                 <label>Rent</label>
//                 <input name='SET_RENT' value={rent} onChange={handleChange}/>
//                 {/* <button onClick={props.history.goBack()}>Previous</button> */}
//                 <button onClick={addHouse}>POST</button> 
//             </div>

//         </section>
//     )
// }

// export default Wizard;
