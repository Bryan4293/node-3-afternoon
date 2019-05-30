const express = require('express');
const massive = require('massive');
require('dotenv').config();
const products_controller = require('./products_controller')
const app = express();
const {SERVER_PORT, CONNECTION_STRING}= process.env;
const {create, getOne, getAll, update, del}= products_controller

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db',db);
    console.log('Database Connected ^_^')
}).catch(error => console.log(error))

app.post(`/api/products`, create)
app.get(`/api/products`, getAll)
app.get(`/api/products/:id`, getOne)
app.put(`/api/products/:id`, update)
app.delete(`/api/products/:id`, del)

app.listen(SERVER_PORT, () => console.log(`Listening to Port ${SERVER_PORT}`))