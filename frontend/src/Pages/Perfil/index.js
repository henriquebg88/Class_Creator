import React from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdGroupAdd } from 'react-icons/md';

import './styles.css';

export default function Perfil() {
    return (
        <div className="container">
            <div className="paper">
                <section id='user-data'>
                    <div className='icons-options'>
                        <div className="usuario-info">
                            <h1>Arara Azul</h1>
                            <p id='id'>id: 34636577</p>
                        </div>
                        <Link to='/perfil/edit' ><MdEdit/></Link>
                    </div>
                    

                    <p id='city'><span>Local:</span> Brasília - DF</p>

                    <p id='email'><span>Email:</span> araraAzul@gmail.com</p>
                </section>
                <hr/>
                <section id='turmas'>
                    <div className="icons-options">
                        <h2>Turmas cadastradas</h2>
                        <Link><MdGroupAdd/></Link>
                        <Link to='/perfil/edit' ><MdEdit/></Link>

                    </div>

                    <div className='lista-turmas'>
                        <ul>

                            <li>
                                <p>a</p>
                            </li>
                            <li>
                                <p>b</p>
                            </li>
                            <li>
                                <p>c</p>
                            </li>
                            <li>
                                <p>d</p>
                            </li>
                            <li>
                                <p>e</p>
                            </li>
                            <li>
                                <p>a</p>
                            </li>
                            <li>
                                <p>b</p>
                            </li>
                            <li>
                                <p>c</p>
                            </li>
                            <li>
                                <p>d</p>
                            </li>
                            <li>
                                <p>e</p>
                            </li>

                        </ul>
                    </div>
                </section>

                
            </div>
        </div>
    )
}