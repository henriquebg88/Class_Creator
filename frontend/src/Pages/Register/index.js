import React from 'react';
import { MdArrowBack } from 'react-icons/md'

import './styles.css';

export default function Register() {
    return (
        <div className="container">
            <section className="floating-box">

                <h2>Registro</h2>

                <form action="">
                    <input type="text" name="name" placeholder="Seu nome ou da instituição" ></input>

                    <input type="text" name="email" placeholder="Email cadastrado"></input>

                    <input type="password" name="password" placeholder="Senha"></input>
                    <input type="password" name="password" placeholder="Confirmar senha"></input>

                    <button type="submit">Cadastrar</button>
                </form>

                <a href="/"><MdArrowBack/> Voltar</a>

                
            </section>
        </div>
    )
}