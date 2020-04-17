import React from 'react';


const House = (props) => {
    const {name, address, state, city, zip, id} = props.home
    



    return(
        <section>
            <p>{name}</p>
            <p>{address}</p>
            <p>{state}</p>
            <p>{city}</p>
            <p>{zip}</p>
            <button onClick={() => props.deleteHouse(id)}>Delete</button>
        </section>
    )
}

export default House;