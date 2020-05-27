import React from 'react';
import DogCard from '../Components/DogCard'
import HomeHistory from '../Components/HomeHistory'

class DogList extends React.Component {

    state = {
        dogs:[]
    }
    
    componentDidMount(){
        console.log('testing')
        fetch('http://localhost:3000/dogs')
        .then(res => res.json())
        .then(dogsData => {
            this.setState({
                dogs:dogsData
            })
        })
    }

    render() {
        console.log(this.props)
        return(
            <div>
                <h1>Dogs</h1>
                {this.state.dogs.map(dog => <DogCard dog = {dog } key = { dog.id }/>)}
                <HomeHistory/>
            </div>
        )
    }
}

export default DogList