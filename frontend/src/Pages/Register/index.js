import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Register() {
    return (
        <div className="container">
            <section className="floating-box">

                <h2>Registro</h2>

                <form action="">
                    <input type="text" name="name" placeholder="Seu nome ou da instituição" ></input>

                    <div className='merge-inputs'>
                        <input type="text" name="city" placeholder='Cidade' />
                        <input className="uppercase UF" type="text" name='uf' maxLength='2' placeholder="uf" />
                    </div>

                    <input className="email" type="text" name="email" placeholder="Email"></input>

                    <input type="password" name="password" placeholder="Senha"></input>
                    <input type="password" name="password" placeholder="Confirmar senha"></input>

                    <button type="submit">Cadastrar</button>
                </form>

                <Link className='Icon-Link' to="/">
                    <MdArrowBack />
                    <p>Voltar</p>
                </Link>


            </section>
        </div>
    )
}