const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Qual o nome do Herói: ', (hero) => {
  readline.question('Qual a quantidade de experiência (XP): ', (xp) => {
    xp = verifyXp(xp);
    console.log(`O Herói de nome ${hero} está no nível de ${xp}`);
    readline.close();
  });
});

function verifyXp(xp) {
  switch (true) {
    case xp <= 1000:
      return "Ferro";
    case xp > 1001 && xp < 2000:
      return "Bronze";
    case xp > 2001 && xp < 5000:
      return "Prate";
    case xp > 6001 && xp < 7000:
      return "Ouro";
    case xp > 7001 && xp < 8000:
      return "Platina";
    case xp > 8001 && xp < 9000:
      return "Ascendente";
    case xp > 9001 && xp < 10000:
      return "Imortal";
    case xp > 10001:
      return "Radiante";
    default:
      return "Nível não encontrado";
  }
}

