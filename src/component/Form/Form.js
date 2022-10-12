import React from 'react';
import './Form.css'
import { EyeSlashIcon } from '@heroicons/react/24/solid'

const Form = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    const rightAnswer = () => {
        if (correctAnswer === options[0]) {
            alert('Wow!!! This is correct')

        }
        else {
            alert('opps.. Wrong answer')
        }
    }
    const rightAnswer2 = () => {
        if (correctAnswer === options[1]) {
            alert('Wow!!! This is correct')
        }
        else {
            alert('opps.. Wrong answer')
        }
    }
    const rightAnswer3 = () => {
        if (correctAnswer === options[2]) {
            alert('Wow!!! This is correct')
        }
        else {
            alert('opps.. Wrong answer')
        }
    }
    const rightAnswer4 = () => {
        if (correctAnswer === options[3]) {
            alert('Wow!!! This is correct')
        }
        else {
            alert('opps.. Wrong answer')
        }
    }
    const eyeCliced = () => {
        // alert('correct answer',);
        alert(correctAnswer)
    }
    return (
        <div className='bgcolor'>
            <div className='flexx'>
                <h1>Question:{question}</h1>
                <EyeSlashIcon className="heght  text-blue-500" onClick={eyeCliced} />
            </div>
            <div className='form'>
                <p className='inside' onClick={rightAnswer}> {options[0]} </p>
                <p className='inside' onClick={rightAnswer2}> {options[1]} </p>
                <p className='inside' onClick={rightAnswer3}> {options[2]} </p>
                <p className='inside' onClick={rightAnswer4}> {options[3] ? options[3] : 'None of these options'}</p>
            </div>

        </div>
    );
};

export default Form;