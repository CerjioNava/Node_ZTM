function encrypt(data) {
    return 'encrypted data';
}

function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`Sending ${encryptedData} to ${url}`);
}

// CommonJS
module.exports = { send }
// ES6
// export { send };