require('dotenv').config()
const express = require('express');
const massive = require('massive');
const app = express()
const {PORT_NUM, CONNECTION_STR} = process.env;
app.use(express.json())

massive({
    connectionString: CONNECTION_STR,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log('Connected to DB')
    app.listen(PORT_NUM, () => console.log(`Listening on ${PORT_NUM}`));
})


