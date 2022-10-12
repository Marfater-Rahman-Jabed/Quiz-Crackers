import React from 'react';
import './Form.css'
const Form = ({ quiz }) => {
    const { question, options } = quiz
    return (
        <div className='bgcolor'>
            <h1>Question:{question}</h1>
            <div className='form'>
                <p className='inside'> <input type="radio" name="" id="" />{options[0]} </p>
                <p className='inside'> <input type="radio" name="" id="" />{options[1]} </p>
                <p className='inside'> <input type="radio" name="" id="" />{options[2]} </p>
                <p className='inside'> <input type="radio" name="" id="" />{options[3] ? options[3] : 'None of these options'}</p>
            </div>

        </div>
    );
};

export default Form;