var http = require("http");
http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/%27');

// Funcion suma 
function suma(a, b){
	return a + b;
}

// Funcion cuadrado 
function cuadrado(numero){
	return numero * numero;
}

// Funcion producto
function producto(a, b){
	return a * b;
}