document.addEventListener('DOMContentLoaded', () => {
    // Establecer la conexión con Socket.IO
    const socket = io();

    // Escuchar el evento 'nuevoProducto' para recibir los nuevos productos del servidor
    socket.on('nuevoProducto', (product) => {
      // Agregar el nuevo producto a la vista sin recargar la página
      const productList = document.getElementById('productList');
      const productItem = document.createElement('li');
      productItem.innerHTML = `
        <h1>${product.title}</h1>
        <h3>${product.description}</h3>
        <h3>${product.category}</h3>
        <img src="${product.thumbnail}" alt="imagen-de-producto">
        <h3>${product.price}</h3>
      `;
      productList.appendChild(productItem);
    });
  });


// Escuchar el evento 'nuevoProducto' para recibir los nuevos productos del servidor
/* socket.on('nuevoProducto', (product) => {
    // Agregar el nuevo producto a la vista sin recargar la página
    const productList = document.getElementById('productList');
    const productItem = document.createElement('li');
    productItem.innerHTML = `
        <h1>${product.title}</h1>
        <h3>${product.description}</h3>
        <h3>${product.category}</h3>
        <img src="${product.thumbnail}" alt="imagen-de-producto">
        <h3>${product.price}</h3>
    `;
    productList.appendChild(productItem);
}); */



    // Enviar un mensaje al servidor cuando el formulario se envía
   /*  document.getElementById('miFormulario').addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const mensaje = formData.get('mensaje');
      socket.emit('mensaje', mensaje); // Envia el mensaje al servidor
    }); */

    // Escuchar la respuesta del servidor
   /*  socket.on('respuesta', (data) => {
      console.log('Respuesta del servidor:', data);
    }); */