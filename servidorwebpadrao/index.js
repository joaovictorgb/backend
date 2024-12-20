const http= require('http')
const server=http.createServer((req,res) =>{
    res.statusCode= 200;
    res.setHeader=('Content-Type', 'text/plain');
    res.end("Meu primeiro hello world do backend");
});
server.listen(8080,() =>{
    console.log("Servidor rodando na porta:8080")
})