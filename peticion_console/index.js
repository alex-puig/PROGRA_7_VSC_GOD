//TO CREATE NEW EXPRESS PROJECT
//dentro del rool folder/ruta
//npm init [enter muchas veces]
//npm install --save express
//TO RUN NODE.JS
//node index.js
//CTRL + C TO QUIT
var XMLHttpRequest =require('xhr2');
const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/posts';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}