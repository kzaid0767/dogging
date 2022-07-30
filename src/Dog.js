import React, {Component} from 'react'
import './Dog.css'
import dog from './dog.jpg'

class Dog extends Component {
    render () {
        return (
            <div className='Dog'>
                <h1>Woof Woof</h1>
                <img className='Dog-img' src={dog}/>
            </div>
        )
    }
}

export default Dog