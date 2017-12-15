import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom';

import Bin1 from "./Bin1"

export default class ShelfA extends Component {

    render() {

        return (
            <div>
                <Link to="/ShelfA/Bin1"><h1>Bin 1</h1></Link>
            </div>
        )
    }
}