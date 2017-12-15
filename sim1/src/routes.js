import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import ShelfA from './components/ShelfA';
import Bin1 from './components/Bin1';

export default (

    //sim1 42G
    <Switch>
        {/* sim1 42F/42H */}
        <Route exact path='/ShelfA/Bin1' component={Bin1} />
        <Route path='/ShelfA' component={ShelfA} />

        {/* sim1 42E */}
        <Link to="/ShelfA"><h1>ShelfA</h1></Link>
    </Switch>

    
)