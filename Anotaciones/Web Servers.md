# **WEB SERVERS**

## **INDICE**

1. What is a Web Server?
    * 
    * 

--------------------------------------------------------------------------------------------------------------

## **What is a Web Server?**

Flujo de llamada al servidor:

* Navegador envía URL (www.facebook.com) al DNS Server para saber donde habita la aplicación.
* DNS Server devuelve una dirección IP (31.13.80.36) al Navegador.
* Navegador con la IP y puerto (31.13.80.36:80) se comunica al HTTP/HTTPS Server. 
* HTTP/HTTPS Server devuelve la data (JSON, XML, TXT) requerida.

### **HTTP Request and Response**

Al realizar una petición HTTP, enviamos data y esperamos una respuesta.

**HTTP Requests:** El cuerpo de una petición HTTP tiene al menos:

* Method: Método de la petición (POST, PUT, DELETE, GET, etc).
* Path: Dirección de la API asociada a la URL /example/direction/message/15.
* Headers: Metadata de la petición en JSON ({ Host:facebook.com, Content-Type: application/json, ... }).
* Body: Cuerpo y data de la petición, en formatos JSON ({ text: "hello", photo: "smile.jpg", ... }), TXT, etc.

**HTTP Response:** El cuerpo de una respuesta HTTP tiene al menos:

* Headers: { Content-Type: application/json, ... }
* Body: JSON ({ text: "hello", photo: "smile.jpg", ... }), TXT, etc.
* Status Code: 
    - Informational responses (100-199)
    - Successful responses (200-299)
    - Redirection messages (300-399)
    - Client errors (400-499)
    - Server errors (500-599)

--------------------------------------------------------------------------------------------------------------


--------------------------------------------------------------------------------------------------------------


--------------------------------------------------------------------------------------------------------------