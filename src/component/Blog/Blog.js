import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='borderSection'>
            <h1 className='margn headingcolor '><u>Question Answer</u></h1>
            <hr />
            <br />
            <h1 className='qscolor margin'>(1.) What is the purpose of <span className='spncolor'>React Router</span> ??</h1>
            <p className='margin'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                React Router is a state container for the current location , or URL. It keeps track of the location and renders different  s as it changes, and it also gives you tools to update the location using Link s and the history API.
            </p><br />
            <h1 className='qscolor margin'>(2.) How does works<span className='spncolor'> Context API</span> ??</h1>
            <p className='margin'>
                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
            </p><br />
            <h1 className='qscolor margin'>(3.) Why we use <span className='spncolor'> Useref</span> ??</h1>
            <p className='margin' >
                The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.useState returns 2 properties or an array. One is the value or state and the other is the function to update the state. In contrast, useRef returns only one value which is the actual data stored. When the reference value is changed, it is updated without the need to refresh or re-render.
            </p>

        </div>
    );
};

export default Blog;