
const { Router } = require('express');


const data = require('../data/data.json');
const route = Router();
route.get('/character', (req, res) => {
    res.json({
        data: data.personajes
    });
});
module.exports = route