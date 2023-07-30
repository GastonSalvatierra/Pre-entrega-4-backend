//aca configuramos las rutas y metodos geto ,post ,put, delete
import { Router } from 'express';
import socketServer from '../../index.js';
const router = Router();
const carrito= [];



//peticiones http comunes

router.get('/', (req,res)=>{
        res.render('home', {products: carrito});
});


router.post('/', (req,res)=>{

    const {title,description,price,category,thumbnail} = req.body;

        let products = {
        title,
        description,
        price,
        category,
        thumbnail
    }

    console.log(products);
    carrito.push(products);

    res.send({ status: "success", message: "Producto AGREGADO con éxito" })

});




//peticiones con websockets

router.get('/realtimeproducts', (req,res)=>{

        res.render('realtimeproducts');    

})



router.post('/realtimeproducts', (req,res)=>{

    const {title,description,price,category,thumbnail} = req.body;

        let products = {
        title,
        description,
        price,
        category,
        thumbnail
    }

    console.log(products);
    carrito.push(products);

    socketServer.emit('nuevoProducto', products);

    res.send({ status: "success", message: "Producto AGREGADO con éxito" })


});



export default router;

