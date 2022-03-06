import React from 'react';
import Logo from './image/logo.png'
import './style.css'
const header = () => {
    return (
        <div>
            <div className='header'>
                <div className='image'>
                    <img src={Logo} alt='logo image' width='190px'></img>
                </div>
                <h1>Coocil Company</h1>
                </div>
        </div>
    );
};

export default header;