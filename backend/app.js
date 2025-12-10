//Iosefa Sunia - Web Prog Fall 2025
const express = require('express');
const bp = require('body-parser');
const Mongoose = require('mongoose');
const path = require('path');

const cardsRoutes = require('./routes/cards-routes');
const decksRoutes = require('./routes/decks-routes');
const usersRoutes = require('./routes/users-routes');


const app = express();

//middleware
app.use(bp.json());
app.use('/assets/images', express.static(path.join('assets', 'images')));

//Listener
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader("Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Authorization");
    
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

    next();
});

//routes
app.use('/api/cards', cardsRoutes);
app.use('/api/decks', decksRoutes);
app.use('/api/users', usersRoutes);

//connect to DB
const url = 'mongodb+srv://idsunia:Trollerman5@cluster0.ebycyla.mongodb.net/WhiteBase?retryWrites=true&w=majority&appName=Cluster0';
Mongoose.connect(url)
    .then(() => {
        app.listen(3001);
        console.log('Connected to Atlas');
    }).catch(err => {
        console.log(err);
    });