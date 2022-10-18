
const express = require('express');
const { listProducts, addProducts } = require('./controladores/produtos');
const routs = express();


routs.get('/produtos',listProducts);
routs.post('/produtos',addProducts);

module.exports = routs;