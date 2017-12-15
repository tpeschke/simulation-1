
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ctrl = require('./controller/controller')

const app = new express();

app.use( cors () )
app.use( bodyParser.json() );


app.get('/api/items', ctrl.getOne)



const port = 5678



app.listen(port, _=>{
    console.log(`FTL is charged, captain. Heading to port ${port}`)
})