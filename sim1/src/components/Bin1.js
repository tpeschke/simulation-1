//sim1 37E-1
import React, { Component } from 'react';

//sim 37E-2
export default class Bin1 extends Component {
    
    //sim1 36I
    constructor() {
        super()

        //Sim1 36C
        this.state = {
            item: 'Baseball',
            price: ''
        }
    }

    //sim1 36F
    render() {

        return (
            <div>
                <section>

                    {/* Sim1 36G */}
                    <h1>{this.state.item}</h1>
                    </section>

            </div>
        )
    }
}