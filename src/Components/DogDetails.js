import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router'

export default function DogDetails() {

    let history = useHistory()
    //useParams looks at the value in the browser and stores it in params, here we are storing the id in the browser link
    let params = useParams()

    let [dog, setDog] = useState({})
    let [JSONDog, setJSONdog] = useState('')

    useEffect(()=> {
        fetch('http://localhost:3000/dogs')
        .then(res => res.json())
        .then(dogsData => {
            let currentDog = dogsData.find(dog => dog.id === parseInt(params.id))
            setDog(currentDog)
            setJSONdog(JSON.stringify({currentDog}, null, 2))
        })
    },[])

    console.log(JSONDog)
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
            {/* pre tag makes json all pretty */}
            <pre>
                {
                    JSONDog
                }
            </pre>
            <button onClick= {() => history.push('/dogs') } >Go to List of Dogs</button>
        </div>
    )
}
