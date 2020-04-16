import React from 'react';


const House = (props) => {
    const {name, id} = props.home
    



    return(
        <section>
            <p>{name}</p>
            <button onClick={() => props.deleteHouse(id)}>Delete</button>
        </section>
    )
}

export default House;