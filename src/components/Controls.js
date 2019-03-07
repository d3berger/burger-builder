import React from 'react'
import BunControl from './BunControl'
import IncrementControl from './IncrementControl'

const controls = (props) => {

    const style = {
        "textTransform": "capitalize"
    }

    const controlList = Object.keys(props.ingredients).map(key => {

        return (
            <div key={key}>
                <IncrementControl handler={props.handler} inc='1' name={key} />
                <span style={style}>{key}</span>
                <IncrementControl disabled={this.props.disabled[key]} handler={props.handler} inc='-1' name={key} />
            </div>
        )
    })

    controlList.unshift(
        <div key="bun">
            <span>Bun</span>
            <BunControl handler={props.handler} bun={props.bun} name='white' />
            <BunControl handler={props.handler} bun={props.bun} name='brown' />
        </div>
    )

return controlList
}

export default controls