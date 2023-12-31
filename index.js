//importar entorno
import express from 'express';
import viewsRouter from './src/routes/views.router.js'
import __dirname from './utils.js'
import handlebars from 'express-handlebars';
import { Server } from 'socket.io'


//Configurar servidor
const app = express();
const PORT = 8080;


//Funciones para postman
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Escuchamos el puerto http creado
const httpServer = app.listen(PORT, () => {
    console.log("Server run on port: " + PORT);
})


//Instanciamos el servidor de socket.io para que haya conexion entre ambos servidore http/socket
const socketServer = new Server (httpServer);

// Configuracion de .hbs
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/src/views');
app.set('view engine', 'handlebars');

//Funcion para trabajar con archivos estaticos
app.use(express.static(__dirname + '/src/public'))

//Usamos las rutas disponibles
app.use('/', viewsRouter);



//Ahora abrimos el canal de comunicacion

socketServer.on('connection', socket => {
    console.log("Nuevo cliente conectado al servidor!!");
}); 

export default socketServer;