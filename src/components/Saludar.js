import React from 'react';

function Saludar(props){
    return (
        <div>
            <h1>Hola {props.name} tiene {props.edad} años</h1>
        </div>
    );
}

export default Saludar;