# **NODE.JS FUNDAMENTALS**

## **INDICE**
1. Foundations and Environment
    * NodeJS REPL
    * NodeJS vs Javascript

2. Internals
    * What Node.js includes
    * Node Internals Deep Dive
    * libuv Internals Deep Dive
    * Synchronous vs Asynchronous
    * Asynchronous Callbacks
    * Multi-Thread
    * Event Pool
    * Observer Design Pattern

3. Module System
    * Modules imports and exports
    * CommonJS and ECMAScript

4. Package Management
    * NPM (Node Package Manager)
    * Modules vs Packages
    * Semantic Versioning
    * Package.json and package-lock.json

5. Files I/O

--------------------------------------------------------------------------------------------------------------

## **Foundations and Environment**

Para ejecutar un script con node desde la terminal:

    >> node hello.js

Node posee acceso a herramientas ajenas a las de Javascript. Así como un browser posee el objeto "Window", Node posee el objeto "Global", "Process", etc.

### **Process Object** 

Es un "global" que provee información y control acerca del proceso actual de Node que está siendo ejecutado.

Process proviene de "global.process".

Ejemplo:

    // const mission = 'learn';
    const mission = process.argv[2];
    console.log(process.argv);

    if (mission === 'learn') 
        console.log('Time to write some Node code!')
    else 
        console.log(`Is ${mission} really more fun? :(`)

Podemos asignar el valor a una variable de argumento de process al ejecutar el script desde consola, de la siguiente manera:

    >> node hello.js learn
        "Time to write some Node code!"
    >> node hello.js notlearn
        "Is notlearn really more fun? :("

NOTA: Imprimiendo "process.argv" obtenemos los parámetros que le estamos pasando desde la consola, es decir:

* node -> La ruta de node en la máquina.
* hello.js -> La ruta del script que estamos ejecutando.
* learn -> Parámetro que estamos utilizando dentro del script.

### **Node vs Javascript**

Javascript es un lenguaje de programación y para ejecutarlo se utiliza un Javascript Engine como V8.

Node esta creado sobre V8 y puede ejecutarse Javascript donde sea, no solo un browser.

Pero, que diferencia hay entre ejecutar Javascript en Node y en un browser?

### **Global Object**

Los browser poseen "window", Node tiene "global".

Browser:

* Window
* Document (Ya que manipulamos documentos)
* History (Podemos interactuar con el histórico del browser)
* Location (Interactuar con las localizaciones, url, etc)
* Navigation (Data sobre el browser)

NodeJS:

* global
* process (Procesamos script o servidores del sistema, argumentos)
* module (Módulos utilizados, funciones, etc)
* __filename (Rutas, archivos, etc)
* require() (Importaciones)
* ...

### **Introduction to Backend vs Frontend**

Node es utilizado mayormente para levantar servidores para aplicaciones web y moviles, conectar a bases de datos, proveer información de usuarios y manipular contenido como fotos, videos, etc.

Estos servidores también manejan herramientas de autenticación y seguridad, lógica de negocio, etc.

--------------------------------------------------------------------------------------------------------------

## **Node: Internals**

**Que existe dentro de NodeJS Runtime?**

* V8 Engine: Lo que nos permite ejecutar código básico de Javascript.

* Node.js APIs: Funciones adicionales que son ajenas a Javascript, como:

    - File system (fs)
    - Requests (http)
    - Path (path)
    - Security (crypto)

* Node.js Bindings: Permiten llamar funcionalidades implementadas en C y C++ (low leven language)

* libuv Library: Escrita en C, maneja entradas y salidas asíncronas.

Un flujo común dentro del runtime sería:

    JS FILE -> NODEJS APIS -> NODEJS BINDINGS -> LIBUV

**Node Internals Deep Dive**

Podemos checkear el código libre de Node en: https://github.com/nodejs/node

**Libuv Internals Deep Dive**

Website: http://libuv.org/

Podemos checkear el código libre de Libuv en: https://github.com/libuv/libuv

Teniendo acceso a las librerías y su contenido, podemos saber como funcionan y saber que es lo que hace por debajo de la mesa por cada función que se ejecute.

**Síncrono vs Asíncrono**

Síncrono se refiere a código que es ejecutado linea por linea, no puede seguir la ejecución hasta que no finalice la linea actual.

Asíncrono permite pone ciertas ejecuciones de funciones asíncronas en una cola de ejecución, mientras prosigue con el resto del código.

**Non-Blocking Input & Output**

Blocking Code se refiere al código o funciones que se ejecutan sincrónicamente, deteniendo el flujo hasta que se completen, como por ejemplo:

    JSON.stringify({"food": "love"});

Non-Blocking Code se refiere al código o funciones que se ejecutan en paralelo a la ejecución y no detienen el flujo de ejecución, por ejemplo:

    setTimeout(myfunction, 1000);

**NOTA**: Javascript es un lenguaje síncrono y debe manipularse para que funcione como un lenguaje asíncrono, para eso existe Node y demás herramientas.

### **Multi-Thread**

Cada hilo de ejecución se "ejecuta" en paralelo a otros y son independientes entre si en términos de ejecución. Esto permite correr código de manera asíncrona a través de hilos.

### **Is Node.js Multi-Threaded?**

Node ejecuta JS, así que se mantiene como un Single-Thread en el Main-Thread, sin embargo es capaz de ejecutar multiples funciones asíncronas enviandolas al Event Loop.

**Event Loop:** Está hecho en Libuv que ejecuta código asíncrono. Es decir, cada función asíncrona llamada en Node desde Javascript, se ejecuta a través del llamado Event Loop.

**Thread Pool:** Colección de Threads.

### **Event Loops**

Fases del Event Loop:

1. Timers
2. I/O Callbacks
3. setImmediate
4. Close Callbacks

Funciones:

* SetTimeout
* SetInterval
* SetImmediate

### **Node vs PHP vs Python**

A diferencia de PHP y Python, que requerían un thread casi por cada request, Node permite manipular multiples request concurrentes a la vez.

Además, no bloquea el servidor. Sin embargo, si es necesario, se pueden usar Web Servers como Apache.

### **What is Node best at?**

Node no es muy bueno en usos de Machine Learning o procesamiento de video. Sin embargo, Node es muy bueno en servidores y sus funciones.

Node es bueno en manipulación de servidores, comunicación a bases de datos, conexión a servidores ajenos (por ejemplo, para autenticación y emails) o sirviendo data a aplicaciones más pesadas. 

Es decir, es bueno para manipular entrada y salida de data en servidores, direccionamiento de la misma, y no tan bueno en cálculos pesados 

Ejemplo: Netflix usa Node. El streaming de video es mayormente entrada y salida, por lo que enviar videos desde una base de datos de videos a través de un server de Node hacia un browser de un usuario o una aplicación específica, es posible y óptimo.

### **Observer Design Pattern**

Es lo que lidia con eventos y problemas de programación, para evitar reinventar patrones ya existentes por cada problema que se pueda presentar.

El observardor (Listener) se suscribirá a eventos (Emitters) y se le notificará cuando estos ocurran, así reacciona y ejecuta alguna funcionalidad para la eventualidad.

**Event-Driven, Event-Module, Event-Emitter, Event-Listener, ...**

En Node, la manera de notificar a un observador es usando Callback Functions. 

Node tiene "Event Modules" para manipular eventos y muchas de las APIs estan creadas sobre una arquitectura síncronca de Event Driven. 

Ejemplo:

    const EventEmitter = require('events');
    const celebrity = new EventEmitter();

    // Suscribe to celebrity for Observer 1
    celebrity.on('race win', function() {
        console.log('1. Congratulations! You won!');
    });

    // Suscribe to celebrity for Observer 2
    celebrity.on('race lost', function() {
        console.log('2. I could have better than that!');
    });

    // PROCESS
    process.on('exit', () => {
        console.log('Events finished!');
    });

    // OTRA FORMA
    celebrity.on('race', (results) => {
        if (results == 'win')
            console.log('1. YOU WON!');
        else 
            console.log('2. YOU LOST!');
    });

    celebrity.emit('race win');
    celebrity.emit('race lost');
    celebrity.emit('race', 'win');
    celebrity.emit('race', 'lost');

**Process:** Deriva del EventEmitter, y tiene funciones para reaccionar a diferentos eventos que pueden ser emitidos en diferentes escenarios del ciclo de vida de Node.
    
NOTA: Véase la documentación para las distintas funcionalidades.

https://nodejs.org/api/events.html#events_events

--------------------------------------------------------------------------------------------------------------

## **Node: Module System**

Los módulos son cajas de herramientas que contienen gran variedad de código específico para resolver ciertas funcionalidades.
Utilizaremos módulos y librerías para reutilizar código ya creado para implementarlo a nuestro código.

* Se reusa código ya existente.
* Permite organizar nuestro código.
* Solo se utiliza la herramienta del módulo que se va a utilizar.

Cuando se importa un módulo, se guarda temporalmente en el caché para ser reutilizado.

### **Require**

Es uno de los módulos built-in function de Node, y se declaran de la forma:

    const EventEmitter = require('events')
    const http = require('http)
    ...

### **Module Exports**

Exportación de un script o librería hacia otros ajenos.

    function read(data) return 'decrypted data';
    module.exports = { read }

NOTA: Ver la carpeta de "Modules Example" para ver el código de ejemplo.

### **CommonJS vs ECMAScript Modules**

CommonJS: Require() es parte de este estandar.

    const myModule = require('module.js');
    module.exports = { myFunction, myVariable };

https://nodejs.org/api/modules.html#modules_modules_commonjs_modules

ECMAScript (ES6): Estandar principal para Javascript Engines. SOLO PARA FORMATO ".mjs".

    import * as myModule from '/module.js';    
    import { send } from './request.mjs';
    import { read } from './response.mjs';
    export { myFunction, myVariable };

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

**Extensión .mjs**:

Es una extensión de Node para Módulos ES6.

### **index.js**

Permite hacer funcionar una carpeta como un módulo.

Permite exportar funciones de distintos módulos que se encuentran en la misma carpeta, desde un solo punto.

**VEASE EL EJEMPLO DE MODULOS!**

NOTA: No es tan recomendable usar "index.js" de esta manera.

--------------------------------------------------------------------------------------------------------------

## **Node: NPM (Node Package Manager)**

Es el registro de software más grande del mundo, donde los desarrolladores comparten y utilizan paquetes de código abierto. Muchas organizaciones también usan npm para administrar el desarrollo privado.

NPM consta de tres componentes distintos:

* El sitio web: Donde se encuentran los paquetes públicos y privados, perfiles, etc. 

    https://www.npmjs.com/

* La interfaz de línea de comandos (CLI): Se ejecuta desde la terminal y la manera general de interactuar con npm y utilizarlo.

* El registro: Es la base de datos pública de software de donde se descarga e instalan los paquetes.

### **Module vs Package**

Un módulo es un archivo que contiene código y funciones para exportar.

Un paquete es una colección de módulos.

Veamos en NPM las distintas variedades de paquetes posibles de implementar para hacer llamadas HTTP:

* node-fetch: A light-weight that brings window.fetch to nodejs.
* got: Human-friendly and powerful HTTP request library.
* axios: Promise based HTTP client for the browser and nodejs.
* ...

Si seleccionamos Axios, la instalación por consola procedería con:

    npm i axios

Sin embargo, para instalar paquetes con NPM, primero necesitamos inicializar la aplicación de Node en nuestra aplicación y generar el "package.json" con:

    npm init

En este momento se pide una serie de especificaciones para la carpeta contenedora de módulos, dejando todo en blanco permanece todo default. Si queremos dejar todo default, escribimos con la bandera:

    npm init -y

Al añadir axios, la librería se implementa automáticamente en el "package.json".

Para ejecutar un script de json con "npm start", se añade al "package.json":

    "scripts": {
        "start": "node https.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    },

NOTA: El script se puede ejecutar desde "node https.js" igualmente.
NOTA: VÉASE Modules_Example y ahora Package_Example.

Creando un paquete:

    // Codigo ejemplo de paquete de Node
    const axios = require('axios');
    axios.get('https://www.google.com')
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
        .then(() => console.log("all done"));

### **Dependency Tree**

Estos paquetes instalados de Node se alojan en el directorio "node_modules" en la raíz del proyecto. Es importante acotar que al instalar un paquete, este también posee Dependencias (más paquetes), es decir, instalando "axios" se descargan automáticamente también sus dependencias "follow-redirects" y "form-data", de las cuales luego dependen de "asynckit" y otras más dependencias. Esto es lo que se conoce habitualmente como un **"Dependency Tree"**.

Esta es la razón por la cual las aplicaciones hechas en Node pueden pesar mucho si las dependencias incluidas se sobreextienden entre si.

Sin embargo, la carpeta de "node_modules" no se comparte en los repositorios debido a su peso, se incluye en el ".gitignore", por lo que basta con el "package.json" y "package-lock.json" que contienen la información de las dependencias. De esta manera al descargar el proyecto solo bastara con hacer "npm install" para descargar todas las dependencias del proyecto mismo.

### **Semantic Versioning**

Dado un número de versión MAJOR.MINOR.PATCH, se incrementa:

    1. MAJOR: Versión cuando se realizan cambios incompatibles de la API.
    2. MINOR: Versión cuando añades una funcionalidad que no rompe la compatibilidad.
    3. PATCH: Versión cuando se arreglan bugs simples.

Por ejemplo:

    "dependencies": {
        "axios": "^0.27.2"
    }

NOTA: El símbolo "^" indica que acepta cualquier cambio de la versión siempre que no sea un cambio en la versión MAJOR.

### **Package-lock.json**

Se genera automáticamente cuando ejecutamos cualquier comando "npm" donde la carpeta de módulos es modificada, o cuando el package.json es modificado.

Es una descripción más específica de las dependencias de nuestro "package.json". No solo se muestran las dependencias o la versión, sino incluso la dirección de donde proviene la dependencia principal o el integrity check del paquete, adicionalmente indica cuales otras dependencias se requieren en el "Dependency Tree".

Con estos archivos de versiones permiten que cualquier colaborador en el proyecto instale las mismas versiones de las dependencias en el proyecto, y así evitar problemas de versionamiento.

### **Vulnerabilities in Dependencies**

Es importante asegurarnos de que nuestras dependencias son seguras. Si una versión de la dependencia está deprecada o sufrió alguna actualización por seguridad y vulnerabilidad, pues lo ideal sería actualizarlo a dicha versión.

Entonces, es importante utilizar versiones con menos vulnerabilidades aunque siempre existirán.

### **Nodemon**

Es una herramienta que ayuda en el desarrollo de aplicaciones al reiniciar automáticamente la aplicación de Node cada vez que un archivo en el proyecto sea modificado.

Instalando Nodemon:

    npm install nodemon

Agregamos al package.json:

    "scripts": {
        "start": "node request.js",
        "dev": "nodemon request.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    }

Ejecutamos:

    npm run dev


--------------------------------------------------------------------------------------------------------------

## **File I/O - Planets Project**

Iniciamos el proyecto con el "npm init".

Con la data en la carpeta del proyecto, necesitaremos una librería con la cual leer Streams de archivos tipo CSV, y la librería de filesystem de Javascript no es suficiente, ya que FileSystem lee archivos, no lo analiza. Descargamos la siguiente librería:

    npm install csv-parser

Así parsearemos CSV con filesystem en streams de datas para parsearlo luego en arrays u objetos. Esta librería permite trabajar con Stream, Callback, Sync, etc.

Véase el proyecto: **Planets Project**.

NOTA: El archivo "kepler_data.csv" lo descargamos de la página de Kepler.
