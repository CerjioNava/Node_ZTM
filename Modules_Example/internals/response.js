function decrypt(data) {
    return `Decrypted data: ${data}`;
}

// module.exports = function read(data) {           // OTRA FORMA DE EXPORTAR
//     return decrypt(data);
// }

function read(data) {
    return decrypt(data);
}

// CommonJS
module.exports = { read }
// ES6
// export { read };