let nome;

nome = prompt(`Qual o seu nome?: `);
alert(`BEM VINDO` + nome);
console.log(nome);

// console.log

const maquina = [`pedra, papel, tesoura`];

var op = prompt(`Escolha entre as 3:\n 1-pedra\n 2-papel\n 3-tesoura`);
var opMaquina = (parseInt(getRandomArbitrary(1,3)));
let jogar;
// jogar = prompt(`Escolha entre as 3:\n 1-pedra\n 2-papel\n 3-tesoura`);

switch (op) {
    case 1:
        console.log(`Escolheu pedra!`)
        break;

    case 1:
        console.log(`Escolheu papel!`)
        break;

    case 3:
        console.log(`Escolheu tesoura!`)
        break;
}
if (opMaquina === 1){
    console.log("Pc escolheu pedra")

}

else if (opMaquina === 2){
    console.log("Pc escolheu papel")

}

else{
    console.log("Pc escolheu tesoura")

}

if(op === opMaquina){
    console.log("Empate")

}
if(op === 1 && opMaquina === 3 || op === 2 && opMaquina === 1 || op === 3 && opMaquina === 2){
    console.log(`${nome}ganhou`)

}else{
    console.log(`${nome}perdeu`)


}
op = parseInt(op);
jogar = (nome, op);

console.log(`Sua escolha foi:${op}`);
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// jogar = prompt(`Escolha entre 0-pedra / 1-papel, 2-tesoura`);

// switch (jogar)