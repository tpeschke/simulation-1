

import React, { Component } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    //Sim 1 39C
    componentDidMount() {
        this.setState(this.props.item)
        console.log(this.state)
    }

    handleName = (e) => {
        this.setState( { name: e } )

    }

    handlePrice = (e) => {
        this.setState( { price: e } )
    }

    confirm = () => {
        var item = this.state

        this.props.confirmSave(item)
    }

    render() {

        return (
            <div>
                <h2>Name</h2>

                 {/* sim1 36G */}
                <input onChange={e => this.handleName(e.target.value)} />
                
                <h2>Price</h2>

                {/* sim1 37D */}
                <input onChange={e => this.handlePrice(e.target.value)}/>

                <button onClick={this.confirm}>SAVE</button>
            </div>
        )
    }
}