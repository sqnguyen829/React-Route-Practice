import React from 'react';
import { useHistory } from 'react-router';

export default function Test() {
    let history = useHistory()
    return (
        <div>
            Test Page
            <button onClick={() => history.push('/')}>Init page</button>
            <button onClick={() => history.push('/about')}>About page</button>
        </div>
    )
}
