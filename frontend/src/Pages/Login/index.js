import React from 'react';
import { Link } from 'react-router-dom';
import { MdPersonAdd } from 'react-icons/md';

import './styles.css'

export default function Login() {
    return (
        <div className="container">
            <section className="floating-box">

                <h2>Login</h2>

                <form action="">
                    <input type="text" name="email" placeholder="Email cadastrado"></input>
                    <input type="password" name="password" placeholder="Senha"></input>
                    <button type="submit">Logar</button>
                </form>

                <Link className='Icon-Link' to="/registro">
                    <MdPersonAdd/>
                    <p>Criar minha conta</p> 
                </Link>

                
            </section>
        </div>
    )
}
