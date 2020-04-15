require('dotenv').config()
const express = require('express');
const massive = require('massive');
const app = express()
const {PORT_NUM, CONNECTION_STR} = process.env;
const {getAll, postHouse, editHouse, deleteHouse} = require('./controller/controller');
app.use(express.json())

massive({
    connectionString: CONNECTION_STR,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    // db.seed()
    console.log('Connected to DB')
    app.listen(PORT_NUM, () => console.log(`Listening on ${PORT_NUM}`));
})

//FULL CRUD

app.get('/api/houses', getAll);
app.post('/api/house', postHouse);
app.put('/api/house/:id', editHouse);
app.delete('/api/house/:id', deleteHouse);

