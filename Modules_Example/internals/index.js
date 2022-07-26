// module.exports = {
//     request: require('./request'),
//     response: require('./response'),
// }

// module.exports = {
//     request: require('./request'),
//     response: require('./response'),
// }


// Tambien:
// const request = require('./request');
// const response = require('./response');

// module.exports = {
//     send: request.send,
//     read: response.read
// }

// También:
module.exports = {
    ...require('./request'),
    ...require('./response')
}
