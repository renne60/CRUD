import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export const setToLocalStorange = (key, value) => {
    localStorage.setItem(key, value);
}
export const getFromLocalStorange = (key) =>{
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}


const Login = () =>  {
    const [Usuario, setUsuario] = useState('');
    const [Password, setPassword] = useState('');

    const handleUsuarioChange = (e) => {
        setUsuario(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const Login = async () => {
            try {
                const response = await axios.post("https://backend-dummy.hospitaldeespecialidades.com.sv/api/auth/login",
                {
                    usuario: Usuario,
                    password: Password
                })
                if(response.status === 200){
                    
                }

                const { token } = await response.data();
                setToLocalStorange("token", token);
                // setToLocalStorange("usuario", Usuario)
                console.log(response)
            } catch(e){
                console.log(e)

            }
    }
    Login()
};
return (
    <form onSubmit={handleSubmit}>
    <input type="input" value={Usuario} onChange={handleUsuarioChange} placeholder="Usuario" />
    <input type="password" value={Password} onChange={handlePasswordChange} placeholder="Contraseña" />
    <button onClick={handleSubmit} type="submit">Iniciar sesión</button>
  </form>
);
};

export default Login