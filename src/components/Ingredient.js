import React from 'react';
import './Ingredient.css'

const ingredient = (props) => {
    return (
        <div className={'ingredient ' + props.name}></div>
    )   
}

export default ingredient