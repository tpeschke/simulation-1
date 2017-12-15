//sim1 37E-1
import React, { Component } from 'react';
import axios from 'axios';

import Input from './Bin1Input';
import Display from './Bin1Display'
import { setTimeout } from 'timers';

//sim 37E-2
export default class Bin1 extends Component {
    
    //sim1 36I
    constructor() {
        super()

        //Sim1 36C
        this.state = {
            id: 'A1',
            name: '',
            price: 0,
            edit: true,
            display: '',
        }

        //Sim1 37C
        this.confirmSave = this.confirmSave.bind(this)
        this.changeView = this.changeView.bind(this)

    }

        //sim 44E
    componentDidMount() {
        this.changeView()
        var id = this.state.id

        //sim 44C & 44D
        axios.get(`/api/items`).then( res => {
            // var {name, price} = res.data
            // this.setState( { name: name, price: price})
            console.log(res.data)
        })
    }

    //sim 36J
    changeView() {
        if (this.state.edit === true) {
            //sim1 36D
            this.setState( { edit: false,
                            display: <Display name={this.state.name}
                                                price={this.state.price}
                                                changeView={this.changeView}/> } )

        } else {
            this.setState( { edit: true, 
                            display: <Input confirmSave={this.confirmSave}/>  } )
        }
    }

    confirmSave(i) {
        var {name, price} = i;
        this.setState( { name: name, price: price } )
        setTimeout(this.changeView(), 1000)
        setTimeout(console.log(this.state.name), 1000)

    }

    //sim1 36F
    render() {

        return (
            <div>
                {/* sim1 36H & 36G */}
                {this.state.display}
    
                    <button>DELETE</button>


            </div>
        )
    }
}