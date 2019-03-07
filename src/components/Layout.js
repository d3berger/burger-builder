import React from 'react'
import Wrapper from './Wrapper'
import Burger from './Burger'

const layout = () => {
    return (
        <Wrapper>
            <ul><li>build</li><li>orders</li><li>checkout</li></ul>
            <Burger />
        </Wrapper>
    )
}

export default layout