import React from 'react';

function Saludar(props){
    return (
        <div>
            <h1>Hola {props.userInfo.nombre} tiene {props.userInfo.edad} años</h1>

            <button onClick={() => props.saludarFn(props.userInfo.nombre)}>Saludar</button>
        </div>
    );
}

export default Saludar;