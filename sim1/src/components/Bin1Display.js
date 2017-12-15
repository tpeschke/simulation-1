import React, { Component } from 'react'

export default class Input extends Component {

    change = () => {
        this.props.changeView()
    }

    render() {

        return (
            <div>
                <h2>Name</h2>
                
                {/* sim1 36E */}
                <h2>{this.props.item}</h2>
                
                <h2>Price</h2>
                <h2>${this.props.price}</h2>
                <button onClick={_ => this.change()}>EDIT</button>
            </div>
        )
    }
}