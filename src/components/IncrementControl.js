import React from 'react'

const incrementControl = (props) => (
    <input type="button" onClick={(e) => props.handler(e, props.name, props.inc)} 
    value={props.inc === '1' ? '+' : '-'} 
    disabled={props.disabled} />
)

export default incrementControl