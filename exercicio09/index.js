const notas = [100, 100, 20,50,100,14]
menorValor = notas[0];
maiorValor = notas[0];
let soma = 0;
let divisor;
let resultado;
let valor;
for(let i = 0; i<notas.length;i++){
  let nota = notas[i];
  if(maiorValor<nota){
    maiorValor = nota;
    }
  else if(menorValor>nota){
    menorValor= nota;
  }
  soma+=nota;
  valor = maiorValor + menorValor;
  numerador = soma - valor;
}
  divisor = notas.length - 2;
  resultado = numerador/divisor

console.log(resultado);