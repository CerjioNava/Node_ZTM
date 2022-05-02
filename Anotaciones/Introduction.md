# INTRODUCCION

## **Como nació Node.js?**

Como se ejecuta Javascript?

Para ejecutar Javascript necesitas un Javascript Runtime y Engine.

Javascript puede ejecutarse en un browser, así como Chrome. Esto es posible gracias a un "Javascript Engine" como V8 que posee Chrome de manera predeterminada.

Node se fundó sobre V8 para poder ejecutarlo fuera de un browser (Sea ahora en local, en un servidor, etc).

## Que es Node.js Runtime?

**Javascript Runtime**: Es como un "entorno" que nos permite ejecutar Javascript y manejar ciertas herramientas. 

Node no es un framework ni un lenguaje de programación, es un Javascript Runtime. 

Node comunica el código hacia el V8 y cualquier herramienta que no pertenezca a Javascript, se comunica entonces con la librería "libuv" (con logo de dinosaurio).

NOTA: Un web browser SI es un Javascript Runtime, ya que IMPLEMENTA un Javascript Runtime.