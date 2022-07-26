// CommonJS
// const request = require('./request');
// const response = require('./response');
// const { send } = require('./internals/request');
// const { read } = require('./internals/response');

// ECMAScript 6 (ES6)
// import { send } from './internals/request.js';
// import { read } from './internals/response.js';

// Internals
// const internals = require('./internals');   //Carpeta como módulo
const { send, read }= require('./internals');   //Carpeta como módulo

function makeRequest(url, data) {
    // request.send(url, data);
    // return response.read(data);
    send(url, data);
    return read(data);
    // internals.request.send(url, data);
    // return internals.response.read(data);

}

let resp = makeRequest('https://miurl.com', 'data');
console.log(resp);