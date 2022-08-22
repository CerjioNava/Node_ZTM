const { stat } = require('fs');
const http = require('http');               // Node's Core HTTP Module, para peticiones HTTP.

const PORT = 3000;

/*  Creamos un servidor que espera un callback.    
    Manipula dos parámetros:
        - req: IncomingMessage  (petición)
        - res: ServerResponse   (se devuelve a quien haya hecho la petición)
    Podemos manejar la información proviniente de la petición.
 */
const server = http.createServer((req, res) => {
    let statusCode = 200;
    // let statusMessage = { 'Content-Type': 'text/plain', };
    let statusMessage = { 'Content-Type': 'application/json', };
    // HEADERS
    res.writeHead(statusCode, statusMessage);
    // DATA
    // res.end('Hello! This is a body test!');
    res.end(JSON.stringify({ id: 1, name: "Sir Cerjio Nava" }));
});



// Se indica al servidor que escuche peticiones. Por default, al local.   
// Ejemplo: localhost
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});