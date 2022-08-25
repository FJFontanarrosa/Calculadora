const express = require('express');
const app = express();

let {suma,resta,division,multiplicacion} = require('./Funcionalidades/calculadora.js'); //Al ser varias, debo guardarlas asi (ver coments en calculadora.js)

//console.log(division(0,0));

console.log(app)