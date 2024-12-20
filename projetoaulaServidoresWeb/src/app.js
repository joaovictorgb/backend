//importamos o express
const express = require('express');
//criamos uma aplicação
const app = express();
//definimos a porta
const PORT=8080
//criamos a rota GET (/saldar)
app.get('/saldar',(req,res) =>{
    res.send("Olá galera, mas agora do express")
})
//iniciamos o servidor
app.listen(PORT,() =>{
    console.log("Servidor rodando na porta 8080");
})