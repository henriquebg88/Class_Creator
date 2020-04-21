import React from 'react';

import './styles.css';

export default function Header(props) {
    return (
        <header>
            <div>
                <h1>Class Organizer</h1>
                <h2>{props.children}</h2>
            </div>
        </header>
    )
}