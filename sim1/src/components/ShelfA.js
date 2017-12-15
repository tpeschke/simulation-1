import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class ShelfA extends Component {

    render() {

        return (
            <div>
                <Link to="/ShelfA/Bin1"><h1>Bin 1</h1></Link>
            </div>
        )
    }
}