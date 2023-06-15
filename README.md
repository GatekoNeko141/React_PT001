# Prueba Tecnica React JS - John Eymar Rodriguez Arteaga

## Instalación del proyecto en ambiente de desarrollo

### Se requiere NodeJS version `16.15.0` o superior y ejecutar en el siguiente orden
* `npm install` o `npm i` para instalar las dependencias
* `npm start` para inciar el proyecto
* `npm run build` para crear el compilado

## Proyecto en produccion

### La carpeta build contiene el proyecto compilado, adicional a esto se debe instalar unas cuantas dependencias con el objetivo de brindar una solucion de enrutamiento del lado del servidor

* `npm install` o `npm i` para las dependencias
* Ejecutar el archivo `node index.js` o usar la librería `PM2` y apuntar a este archivo
#
## Advertencia
### Para realizar el CRUD del proyecto se usó el endpoint https://jsonplaceholder.typicode.com
### Aunque las respuestas HTTP son exitosas y arrojan siempre el mensaje `200`, los cambios realizados a traves de las peticiones POST, PUT y DELETE no se veran reflejados en la lista de objetos
#
## Muchas gracias