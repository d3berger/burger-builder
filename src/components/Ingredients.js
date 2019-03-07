import React from 'react'
import Ingredient from './Ingredient'

const ingredients = (props) => {
    
    let list = [<Ingredient key="bun-top" name={props.bun + '-top'} />]
    let count = 0
    
    for (let i = 1 ; i <= props.ingredients.lettuce ; i++ ) {
        list.push(<Ingredient key={'lettuce' + i} name="lettuce" />)
        count++
    }
    
    for (let i = 1 ; i <= props.ingredients.tomato ; i++ ) {
        list.push(<Ingredient key={'tomato' + i} name="tomato" />)
        count++
    }
    
    for (let i = 1 ; i <= props.ingredients.meat ; i++ ) {
        list.push(<Ingredient key={'meat' + i} name="meat" />)
        count++
    }
    
    for (let i = 1 ; i <= props.ingredients.cheese ; i++ ) {
        list.push(<Ingredient key={'cheese' + i} name="cheese" />)
        count++
    }

    if (count === 0) {
        list.push(<div key="0">Please add ingredients</div>)
    }
    
    list.push(<Ingredient key="bun-bottom" name={props.bun + '-bottom'} />)
    
    return list
    
}

export default ingredients