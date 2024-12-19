const fs= require('fs').promises;
const crypto = require('crypto');

async function exemplo(){
    try{
        //criar um arquivo de conteudo
        await fs.writeFile('mensagem.txt', 'Olá, essa é uma mensagem secreta');
        //ler arquivo
        const conteudo = await fs.readFile('mensagem.txt','utf-8');
        //criptografar ele
        const hash = crypto.createHash('md5').update(conteudo).digest('hex');
        console.log('Conteudo principal:', conteudo);
        console.log('Conteudo criptografado:',hash)
        //deletar o arquivo
        await fs.unlink('mensagem.txt');
        //lancar erro caso nao consiga executar
    } catch(erro){
        console.error("Ocorreu um erro :", erro)
    }
}
exemplo();