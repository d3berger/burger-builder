import React, { Component } from 'react'
import Ingredients from './Ingredients'
import Controls from './Controls'
import Wrapper from './Wrapper'

const INGREDIENTS_COST = {
    meat: 1.00,
    cheese: 1.00,
    lettuce: 0.50,
    tomato: 0.50
}

class Burger extends Component {

    state = {
        bun: "white",
        ingredients: {
            meat: 0,
            cheese: 0,
            lettuce: 0,
            tomato: 0
        },
        ingredientsCount: 0,
        price: 1.00
    }

    handler = (e, ing, value) => {
        if (ing === 'bun') {
            this.setState({ bun: value })
        } else {
            let cost = INGREDIENTS_COST[ing] * parseInt(value)
            this.setState((state) => {
                let newVal = state.ingredients[ing] + parseInt(value)
                if (newVal < 0) {
                    newVal = 0
                    cost = 0
                }
                let ingredients = { ...state.ingredients }
                ingredients[ing] = newVal
                return {
                    ingredients: ingredients,
                    ingredientsCount: state.ingredientsCount + newVal,
                    price: state.price + cost
                }
            })
        }
    }

    disableControls = () => {
        const controls = { ...this.state.ingredients }

        const disabledControls = Object.keys(controls).map(key => {
            return disabledControls[key] > 0
        })
        return disabledControls
    }

    render() {
        return (
            <Wrapper>
                <div>Price: ${this.state.price}</div>
                <Controls disabled={this.state.disableControls} bun={this.state.bun} ingredients={this.state.ingredients} handler={this.handler} />
                <Ingredients bun={this.state.bun} ingredients={this.state.ingredients} />
            </Wrapper>
        )
    }
}

export default Burger