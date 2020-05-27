import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router'

export default function DogDetails() {

    let history = useHistory()
    let params = useParams()

    let [dog, setDog] = useState({})

    useEffect(()=> {
        fetch('http://localhost:3000/dogs')
        .then(res => res.json())
        .then(dogsData => {
            let currentDog = dogsData.find(dog => dog.id === parseInt(params.id))
            setDog(currentDog)
        })
    },[])

    return (
        <div>
            <h3>
                Name: { dog.name }
            </h3>
            <h3>
                Breed: { dog.breed }
            </h3>
            <h3>
                Desc: { dog.desc }
            </h3>
            <button onClick= {() => history.push('/dogs') } >Go to List of Dogs</button>
        </div>
    )
}
