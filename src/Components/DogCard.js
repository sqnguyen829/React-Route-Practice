import React from 'react';
import { useParams, useHistory } from 'react-router'

export default function DogCard(props) {
    let history = useHistory()
    return (
        <div>
            <div onClick = {()=> history.push(`/dogs/${props.dog.id}`)}>
                <h2>
                   { props.dog.name }
                </h2>
            </div>

        </div>
    )
}
