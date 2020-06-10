import React from 'react';
import './card.styles.css'
export const Card = props => (
    <div className="card-container">
        <img src={`https://www.pngrepo.com/png/290085/180/user-avatar.png`} alt="user"/>
        <h2> {props.monster.name} </h2>
        <p> { props.monster.email } </p>
    </div>
);