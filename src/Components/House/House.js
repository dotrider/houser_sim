import React from 'react';
import './House.css'


const House = (props) => {
    const {img, name, address, state, city, zip, mortgage, rent, id} = props.home
    



    return(
        <section className='houses'>
            <div className='container'>
            <div id='pic'><img src={img}/></div>
            <div>
                <p>Property name: {name}</p>
                <p>Address: {address}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zip: {zip}</p>
            </div>
            <div>
                <span id='x' onClick={() => props.deleteHouse(id)}>X</span>
                <p>Monthly Mortgage: {mortgage}</p>
                <p>Desired Rent: {rent}</p>
            </div>
            </div>
        </section>
    )
}

export default House;