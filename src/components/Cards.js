import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check Out these Cards!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src="images/img-1.jpg" 
                    text="Explore! #1 Text Lorem Ipsum The Text" 
                    label='Genre1Label' 
                    path='/services'/>
                    <CardItem 
                    src="images/img-2.jpg" 
                    text="Explore! #2 Text Lorem Ipsum The Text" 
                    label='Genre2Label' 
                    path='/services'/>
                    <CardItem 
                    src="images/img-3.jpg" 
                    text="Explore! #3 Text Lorem Ipsum The Text" 
                    label='Genre2Label' 
                    path='/services'/>
                    

                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src="images/img-4.jpg" 
                    text="Explore! #4 Text Lorem Ipsum The Text" 
                    label='Genre1Label' 
                    path='/services'/>
                    <CardItem 
                    src="images/img-5.jpg" 
                    text="Explore! #5 Text Lorem Ipsum The Text" 
                    label='Genre2Label' 
                    path='/services'/>
                    <CardItem 
                    src="images/img-6.jpg" 
                    text="Explore! #6 Text Lorem Ipsum The Text" 
                    label='Genre2Label' 
                    path='/services'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards