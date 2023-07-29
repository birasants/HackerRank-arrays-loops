//Brasil com P
//dado um par de letras qualquer, imprima na tela as palavras que começam com essas duas primeiras letras.
// oq queremos fazer aqui e descobrir qual palavra possui as mesmas letras iniciais e a segunda letra 

const palavras  = ['eia','manha','e'];
let primeiraLetra = 'a';
let segundaLetra = 'v';
let firstLetter;
let secondLetter;
let i = 0;

  for(let palavra of palavras){
    firstLetter = palavra[0];
    secondLetter = palavra[1];
  if( firstLetter === primeiraLetra && secondLetter === segundaLetra){
      console.log(palavra);
      i++;
  }
  
}
if(i===0){
  console.log('NENHUMA');
}