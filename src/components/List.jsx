import React from 'react'
import Card from './Card'
import Form from './Form'

export default function List(props) {
    return (
        <div className='row row-cols-3'>
            {/* for each of the card in cards, call the Card component, pass in the content , and the id, so that it will only rerender the thing that change */}
            {props.cards.map(card =>{
                return <Card card={card} key={card.id}/>
            })}
        </div>
    )
}
