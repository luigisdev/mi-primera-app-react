import React from 'react';

function Saludar(props){
    const {userInfo, saludarFn} = props;
    
    return (
        <div>
            <h1>Hola {userInfo.nombre} tiene {userInfo.edad} años</h1>

            <button onClick={() => saludarFn(userInfo.nombre)}>Saludar</button>
        </div>
    );
}

export default Saludar;