//exporta a dependecia externa moment
const moment = require('moment')
//armazena a data atual
const dataAtual= moment();
const dataNascimento= moment('2002-10-10')
if(!dataNascimento.isValid){
    console.log("Data de nascimento invalida")
}else{
        const diasDesdeNascimento = dataAtual.diff(dataNascimento,'days');
        console.log("Dias desde o nascimento:",diasDesdeNascimento)
    }


