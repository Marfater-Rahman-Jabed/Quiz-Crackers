import React from 'react';
import { Link } from 'react-router-dom';
import './QuizCard.css'

const QuizCard = ({ quiz }) => {
    const { name, logo, total, id } = quiz;
    console.log(quiz);
    return (
        <div className='card'>
            <img src={logo} alt="" />
            <div className='cardbtn'>
                <h2>{name}</h2>
                <p><small>Total quiz:{total}</small></p>
                <Link to={`/topic/${id}`}><button className='btnn'>start parctice</button></Link>
            </div>
        </div>
    );
};

export default QuizCard;