import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default function DogBreedImages (props){
    const {images} = props
return(
    <div classNmae = "dog-breed-images">
 <h1>Dogs Breed Images { props.breed}</h1>
 <div>
  { images && images.map(url => <img src={ url } alt="Dog" />) }
  { !images && 'Loading...' }
</div>


 <p><Link to ="/">  Go back to the index</Link></p>


    </div>
)
}

