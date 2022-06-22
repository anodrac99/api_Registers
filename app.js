
const express = require('express');

//Init Express App
const app = express();

//Utils
const { db } = require('./utils/database.util')

//Authenticate
db.authenticate()
.then(() => console.log('DB authenticated'))
.catch(err => console.log(err));

db.sync()
    .then(() => console.log('BD synced'))
    .catch(error => console.log(error))

//Rotes
const { registersRouter } = require('./routes/register.routes')

app.use(express.json());


app.use( '/registers',registersRouter )


app.listen(3000, () => {
    console.log('App On!');
})