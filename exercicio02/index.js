const palavras = ["mamao","maca","melao","melancia", "laranja"];
const letra = 'm';
let erro = 0;
for (let palavra of palavras){
  if(letra != palavra[0]){
    erro++;
  }
  }
  console.log(erro);