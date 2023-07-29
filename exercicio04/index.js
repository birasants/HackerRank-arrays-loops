//carrossel

const sequencia =['>','>','>','<','>'];

let i = 0;
for(let unidade of sequencia){
  if(unidade === '>'){
    i++;
  }else{
    i--;
  }
  if(i < 0){
    i = 6;
  }else if(i>6){
    i=0;
  }
}
console.log(i);
