// Import React
import React from 'react';

// Importar style of component Login
import './style/Login.css';
import btnFacebook from '../../assets/btnFacebook.svg';
import btnGithub from '../../assets/btnGithub.svg';
import btnGoogle from '../../assets/btnGoogle.svg';


const Login = ()=>{
    return(
        <div className='loginContainer'>
            <p>Ingresar con</p>
            <button className='btnFacebook'>
                <img src={btnFacebook} alt='Logo de Facebook'/>
            </button>
            <button className='btnGithub'>
                <img src={btnGithub} alt='Logo de Github'/>
            </button>
            <button className='btnGoogle'>
                <img src={btnGoogle} alt='Logo de Google'/>
            </button>
        </div>
    );
}

export default Login;