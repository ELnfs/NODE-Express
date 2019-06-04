const exphbs = require('express-handlebars');
const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT=3002;

http.listen(PORT, ()=>{
    console.log('Está furuling :)');
});

/* 
 * Inserta las rutas de los assets, estilos y otras 
 * rutas estáticas que nuestra aplicación 
 */
app.use(express.static(__dirname + '/public'));

/*
 * Inicializa la connexión con el servidor de Socket.io 
 */
io.on('connection', function(socket) {
    socket.on('chat message', function(msg){
        console.log("User conected");
        io.emit('chat message', msg);
    });
});

/*
 * Preparamos el entorno de plantillas Handlebars
 */
app.engine(".hbs",exphbs({extname: '.hbs'}))
app.set("view engine", ".hbs")
app.get('/',(request,response)=>response.render("index"))


