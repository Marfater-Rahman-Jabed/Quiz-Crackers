import React from 'react';
import { Link } from 'react-router-dom';
import './QuizCard.css'

const QuizCard = ({ quiz }) => {
    const { name, logo } = quiz;
    console.log(name);
    return (
        <div className='card'>
            <img src={logo} alt="" />
            <div className='cardbtn'>
                <h2>{name}</h2>
                <Link><button className='btnn'>start parctice</button></Link>
            </div>
        </div>
    );
};

export default QuizCard;