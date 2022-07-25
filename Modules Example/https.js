const request = require('./request');
const response = require('./response');

function makeRequest(url, data) {
    request.send(url, data);
    return response.read(data);
}

let resp = makeRequest('https://miurl.com', 'data');
console.log(resp);