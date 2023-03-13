//Como crear un servidor node.js B)




const { json } = require('express');
var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send("Helo world B)");
});

app.get('/alumno', function(req,res){

        
    let arrayAlumnos = [ 
                {
                    name: "Pedro",
                    l_name: "Blue", 
                    id: "1234",
                },
                {
                    name: "Johnny",
                    l_name: "Black", 
                    id: "4567",
                },];
        res.json(arrayAlumnos);



    
});
//COMO HACER UNA PETICIÓN HTTP, REPLICAR UN EJEMPLO CON UN ENDPOINT; VA A MANDAR UNA EXEPCIÓN, DESAHIBILITAR POLITICA DE CORES
app.get('/profesor', function(req,res){ //los : indican que le vas a pasar un valor a dicha variable; valor en cabezera.

    let arrayProf = [ 
        {
            name: "Jonathan",
            l_name: "Joestar", 
            id: "5102",
        },
        {
            name: "Beto",
            l_name: "Senior", 
            id: "5103",
        },];
res.json(arrayProf);

});

app.get('/array', function(req,res){
    //Aquí podrias hacer consultas para obtener los valores requeridos :D
    //cada petición, la tiene que responder.
    let coche1 = {
        model: "Fiesta",
        color: "red", 
        year: "2015",
    };

    let arrayCars = [coche1, 
                    {
                      model: "Ford",
                      color: "Blue", 
                      year: "2016",
                    },
                    {
                      model: "Papupro",
                      color: "Black", 
                      year: "2020",
                    },];
    res.json(arrayCars);
});
















app.listen(3001); 


//todo lo que llegue en ese puerto lo voy a recibir y trabajar, puede ser el que sea jijijajaja.
// esto es importante para que se ejecute el servidor0, para salirce del servidor, control + c

//crear servidor, donde hicimos la instalación del express.
//Corres el servidor con el comando node index.js
//Si escribes una dirección que no existe, te va a mandar que no existe un get B)

//Postman: cliente para testear APIs B)


//console.log("jijijiia"); esto es consola del servidor, no al cliente
//Cualquier objeto realizado es un json en javascript.