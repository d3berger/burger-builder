import React from 'react'

const bunControl = (props) => {
    const style = {
        "textTransform": "capitalize"
    }

    return (
        <span>
            <input checked={props.bun === props.name ? 'checked' : ''} type="radio" name="bun" id={props.name} value={props.name}
                onChange={(e) => props.handler(e, 'bun', props.name)} />
            <label style={style} htmlFor={props.name}>{props.name}</label>
        </span>
    )
}

export default bunControl