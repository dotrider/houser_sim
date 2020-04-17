import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
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
        <section className='steps'>
                <div className='info'>
                <p>Image URL:</p>
                <input name='image' value={image} onChange={e => setImage(e.target.value)}/>
                </div>
                <div className='btns'>
                <span className='next' onClick={() => {
                updateImg(image)
                props.history.push('/wizard/step1')}}>Previous Step</span>
                <span className='next' onClick={() => {
            dispatch(updateImg(image))
                props.history.push('/wizard/step3')}}>Next Step</span>
                </div>

        </section>
    )
}

export default Step2;