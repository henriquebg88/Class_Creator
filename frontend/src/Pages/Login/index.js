import React from 'react';
import { MdPersonAdd } from 'react-icons/md';

import './styles.css'

export default function Login() {
    return (
        <div className="container">
            <section className="floating-box">

                <h2>Login</h2>

                <form action="">
                    <input type="text" name="name" placeholder="Email cadastrado"></input>
                    <input type="password" name="password" placeholder="Senha"></input>
                    <button type="submit">Logar</button>
                </form>

                <a href="/registro"><MdPersonAdd></MdPersonAdd> Ainda não criei a minha conta</a>

                
            </section>
        </div>
    )
}
