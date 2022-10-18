const express = require("express");
const cors = require("cors");
const routs = require("./rotas")
const app = express()
const morgan = require('morgan')
const bodyParse = require("body-parser");

app.use(bodyParse.urlencoded({extended:false}))
app.use(routs)
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))
app.listen(3333);