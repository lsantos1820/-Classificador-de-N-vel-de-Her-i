// Herois.js - versão Node.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function classificarNivel(xp) {
  if (xp <= 1000) return "Ferro";
  if (xp <= 2000) return "Bronze";
  if (xp <= 5000) return "Prata";
  if (xp <= 7000) return "Ouro";
  if (xp <= 8000) return "Platina";
  if (xp <= 9000) return "Ascendente";
  if (xp <= 10000) return "Imortal";
  return "Radiante";
}

rl.question("Digite o nome do herói: ", (nome) => {
  rl.question("Digite a quantidade de XP do herói: ", (valor) => {
    const xp = parseInt(valor, 10);
    const nivel = classificarNivel(xp);
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
    rl.close();
  });
});
