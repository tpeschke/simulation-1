//sim1 37E-1
import React, { Component } from 'react';

import Input from './Bin1Input';
import Display from './Bin1Display'

//sim 37E-2
export default class Bin1 extends Component {
    
    //sim1 36I
    constructor() {
        super()

        //Sim1 36C
        this.state = {
            item: 'Baseball',
            price: 15,
            edit: true,
            button: 'SAVE',
            display: <Input />
        }

        //sim 37C
        this.edit = this.edit.bind(this)
    }

    //sim 36J
    edit(){
        if (this.state.edit === true) {
            //sim1 36D
            this.setState( { edit: false, 
                            button: 'EDIT', 
                            display: <Display item={this.state.item}
                                                price={this.state.price}/> } )
            
        } else {
            this.setState( { edit: true, button: 'SAVE', display: <Input />  } )
        }
    }

    //sim1 36F
    render() {

        return (
            <div>
                {/* sim1 36H & 36G */}
                {this.state.display}
                <section>
                    {/* sim1 36G */}
                    <button onClick={this.edit}>{this.state.button}</button>
                    <button>DELETE</button>
                    </section>

            </div>
        )
    }
}