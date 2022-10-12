import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Form from '../Form/Form';
import './Reacts.css';
const Reacts = () => {
    const reactQuiz = useLoaderData();
    const { questions } = reactQuiz.data
    const quizs = questions;
    console.log(quizs)
    return (
        <div>
            <h1 className='center'>Answer this question on <span className='color'>{reactQuiz.data.name}</span> part</h1> <hr />

            {
                quizs.map(quiz => <Form key={quiz.id} quiz={quiz}></Form>)
            }


        </div>
    );
};

export default Reacts;