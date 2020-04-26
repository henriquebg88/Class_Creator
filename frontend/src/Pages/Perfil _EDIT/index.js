import React from 'react';
import { Link } from 'react-router-dom';
import { MdDelete, MdEdit, MdArrowBack } from 'react-icons/md'

import '../Perfil/styles.css';

export default function Perfil_edit() {
    return (
        <div className="container">
            <div className="paper">
                <section id='user-data' className='edit'>

                    <form action="post">
                        <div className="label-input">
                            <label htmlFor=""><span>Nome:</span></label>
                            <input type='text' defaultValue='Arara Azul' ></input>
                        </div>
                            
                        <div className='merge-inputs'>
                            <div className='label-input'>
                                <label htmlFor=""><span>Local:</span></label>
                                <input type='text' id='city' defaultValue='Brasília'></input>
                            </div>

                            <div className='label-input'>
                                <label htmlFor=""><span>UF</span></label>
                                <input className='uppercase' id='uf' type="text" maxLength='2' defaultValue='DF'/>
                            </div>
                        </div>

                        <div className="label-input">
                            <label htmlFor=""><span>Email:</span></label>
                            <input type='email' id='email' defaultValue='araraAzul@gmail.com' ></input>
                        </div>
                    </form>

                    <Link to='/perfil' ><MdArrowBack/></Link>

                </section>
                <hr/>
                <section id='turmas'>
                    <h2>Turmas cadastradas</h2>

                    <div className='lista-turmas edit'>
                        <ul>

                            <li>
                                <p>a</p>
                                <Link className='edit-icon' ><MdEdit/></Link>
                                <Link className='delete-icon' ><MdDelete/></Link>
                            </li>
                            <li>
                                <p>b</p>
                                <Link className='edit-icon' ><MdEdit/></Link>
                                <Link className='delete-icon' ><MdDelete/></Link>
                            </li>
                            <li>
                                <p>c</p>
                                <Link className='edit-icon' ><MdEdit/></Link>
                                <Link className='delete-icon' ><MdDelete/></Link>
                            </li>
                            <li>
                                <p>d</p>
                                <Link className='edit-icon' ><MdEdit/></Link>
                                <Link className='delete-icon' ><MdDelete/></Link>
                            </li>
                            <li>
                                <p>e</p>
                                <Link className='edit-icon' ><MdEdit/></Link>
                                <Link className='delete-icon' ><MdDelete/></Link>
                            </li>
                            <li>
                                <p>a</p>
                                <Link className='edit-icon' ><MdEdit/></Link>
                                <Link className='delete-icon' ><MdDelete/></Link>
                            </li>
                            <li>
                                <p>b</p>
                                <Link className='edit-icon' ><MdEdit/></Link>
                                <Link className='delete-icon' ><MdDelete/></Link>
                            </li>
                            <li>
                                <p>c</p>
                                <Link className='edit-icon' ><MdEdit/></Link>
                                <Link className='delete-icon' ><MdDelete/></Link>
                            </li>
                            <li>
                                <p>d</p>
                                <Link className='edit-icon' ><MdEdit/></Link>
                                <Link className='delete-icon' ><MdDelete/></Link>
                            </li>
                            <li>
                                <p>e</p>
                                <Link className='edit-icon' ><MdEdit/></Link>
                                <Link className='delete-icon' ><MdDelete/></Link>
                            </li>

                        </ul>
                    </div>
                </section>

                
            </div>
        </div>
    )
}