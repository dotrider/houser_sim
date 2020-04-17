import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import { updateImg } from '../../redux/reducer';



const Step2 = (props) => {
    const [image, setImage] = useState('')

//mapStateToProps
// const {image} = useSelector(state => state)

//dispatchToProps
const dispatch = useDispatch()

// useEffect(() => {
//     dispatch(image)
// },[])


    return(
        <section>
            Step2
            <Link to ='/'>Cancel</Link>
                <label>Image URL</label>
                <input name='SET_IMAGE' value={image} onChange={e => setImage(e.target.value)}/>
                <button onClick={() => {
                    updateImg(image)
                    props.history.push('/wizard/step1')}}>Previous</button>
                <button onClick={() => {
                    dispatch(updateImg(image))
                    props.history.push('/wizard/step3')}}>Next</button>

        </section>
    )
}

export default Step2;