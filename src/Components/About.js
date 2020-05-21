import React from 'react';
import { useHistory } from 'react-router';

export default function About() {
    let history = useHistory()
    return (
        <div>
            About this page
            <button onClick={() => history.push('/')}>Init page</button>
            <button onClick={() => history.push('/test')}>Test page</button>
        </div>
    )
}
