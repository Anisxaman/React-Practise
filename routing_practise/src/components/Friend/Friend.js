import React from 'react';

const Friend = (props) => {
    console.log(props)

    const{name,phone,address}=props.friend


    return (
        <div>
          <h2>I am : {name}</h2>
          <h5>Call Me: {phone}</h5>
          <p>Visit me: {address.city}</p>
            
        </div>
    );
};

export default Friend;