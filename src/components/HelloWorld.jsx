import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HelloWorld = ({saludo}) => {
    return (
        <div>
            <h1 className='display-1'>Hello {saludo}</h1>
        </div>
    );
};

export default HelloWorld;