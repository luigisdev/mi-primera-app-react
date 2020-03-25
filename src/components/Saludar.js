import React from 'react';

function Saludar(props){
    const {userInfo, saludarFn} = props;
    const {nombre = "Anonimo"} = userInfo;
    
    return (
        <div>
            <h1>Hola {userInfo.nombre} tiene {userInfo.edad} años</h1>

            <button onClick={() => saludarFn(nombre)}>Saludar</button>
        </div>
    );
}

export default Saludar;