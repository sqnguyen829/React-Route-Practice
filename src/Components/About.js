import React from 'react';
import { useHistory } from 'react-router';
import { Switch, Route } from 'react-router-dom'
import ClassCompTest from './ClassCompTest'

export default function About() {
    let history = useHistory()
    return (
        <div>
            About this page
            <button onClick={() => history.push('/')}>Init page</button>
            <button onClick={() => history.push('/test')}>Test page</button>
            {/* <Switch>
                <Route exact path = '/classTesting' component={ ClassCompTest }/>
            </Switch> */}
        </div>
    )
}
