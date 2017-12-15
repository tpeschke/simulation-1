//sim1 37E-1
import React, { Component } from 'react';
import axios from 'axios';

import Input from './Bin1Input';
import Display from './Bin1Display'

//sim 37E-2
export default class Bin1 extends Component {
    
    //sim1 36I
    constructor() {
        super()

        //Sim1 36C
        this.state = {
            item: '',
            edit: true,
            display: <Display />
        }

        //Sim1 37C
        this.confirmSave = this.confirmSave.bind(this)

    }


    componentDidMount() {

        axios.get(`/api/items`).then((req, res) => {
            console.log('hit')
        })
    }

    //sim 36J
    changeView(){
        if (this.state.edit === true) {
            //sim1 36D
            this.setState( { 
                            display: <Display item={this.state.item}
                                                changeView={this.changeView}/> } )

        } else {
            this.setState( { display: <Input confirmSave={this.confirmSave}/>  } )
        }
    }

    confirmSave(i) {
        this.setState( { item: i } )
        this.changeView()
        console.log(this.state.item)
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