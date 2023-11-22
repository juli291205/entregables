const express = require('express');
const app = express();

// Archivo de productos simulado
const productos = [
    { id: 1, nombre: 'Producto 1', precio: 10 },
    { id: 2, nombre: 'Producto 2', precio: 20 },
    { id: 3, nombre: 'Producto 3', precio: 20 },
    { id: 4, nombre: 'Producto 4', precio: 20 },
    { id: 5, nombre: 'Producto 5', precio: 20 },
    { id: 6, nombre: 'Producto 6', precio: 20 },
    { id: 2, nombre: 'Producto 7', precio: 20 },
    { id: 2, nombre: 'Producto 8', precio: 20 },
    { id: 2, nombre: 'Producto 9', precio: 20 },
    { id: 2, nombre: 'Producto 10', precio: 20 },
];

// Ruta para obtener todos los productos
app.get('/products', (req, res) => {
    const limit = parseInt(req.query.limit);
    if (limit) {
        res.json(productos.slice(0, limit));
    } else {
        res.json(productos);
    }
});

// Ruta para obtener un por su ID
app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(prod => prod.id === id);

    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ error: 'El producto no existe' });
    }
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});