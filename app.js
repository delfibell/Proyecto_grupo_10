const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
}); 

app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, '/views/index.html'));
} );

app.get('/detalle-de-producto', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/detalle-de-producto.html'));
} );

app.get('/registro', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/formularioDeRegistro.html'));
} );

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/formularioDeLogin.html'));
} );

app.get('/carrito', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/carrito.html'));
} );
