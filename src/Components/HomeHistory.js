import React from 'react';
import { useHistory } from 'react-router'

export default function HomeHistory() {
    let history = useHistory()
    return (
        <div>
            <button onClick={ () => history.push('/') }>Home </button>
        </div>
    )
}