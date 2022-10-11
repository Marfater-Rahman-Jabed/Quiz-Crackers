import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../QuizCard/QuizCard';
import './Home.css'
const Home = () => {
    const quizs = useLoaderData();
    console.log(quizs);
    const ans = quizs.data;
    return (
        <div>
            <div className='home'>
                <img src="https://t4.ftcdn.net/jpg/02/04/23/79/360_F_204237911_xyKrPNLFAWwmM7pm6t3OKpj1yuI0T0KH.webp" alt="" />
                <h1 className='color'>TEST YOURSELF HERE</h1>
            </div><br /><br />
            <div className='grridd'>
                {
                    ans.map(quiz => <QuizCard quiz={quiz}></QuizCard>)
                }
            </div>
        </div>
    );
};

export default Home;