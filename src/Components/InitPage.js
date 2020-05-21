import React from 'react';
import { useHistory } from 'react-router';

export default function InitPage(props) {
    let history = useHistory()
    return (
        <div>
            Welcome to Home Page!! 
            <h1>{ props.stuff.something }</h1>
            <button onClick={() => history.push('/about')}>About page</button>
            <button onClick={() => history.push('/test')}>Test page</button>
        </div>
    )
}
