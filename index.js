let numeroUno = 5;
let numeroDos = 4;
let facto;

function elevarNumero(){

  let numeroElevado = numeroUno;
  for(let i = 1; i<numeroDos; i++){
    numeroElevado = numeroElevado*numeroUno
  }
  return console.log(numeroElevado);
}
elevarNumero()

function factorial(){
  for(let i = 1; i<=numeroUno; i++){
    facto +=" "+i+" *";
  }
  facto = facto.substr(0,facto.length-1)
  console.log(facto);

}
factorial()

let factorialFlecha = () => {
  for(let i = 1; i<=numeroUno; i++){
    facto +=" "+i+" *";
  }
  facto = facto.substr(0,facto.length-1)
  console.log(facto);

}
factorialFlecha()

let fibUno = 0;
let fibDos = 1;
let fiboS = [];
//numero de veces que se ejecuta el programa
let fibo=20;


let fibof = () => {
  fiboS.push(fibUno)
  fiboS.push(fibDos)
 for(let i = 1; i <=fibo ; i++ ){
   fiboS.push(fiboS[i-1]+fiboS[i])
 
  console.log(fiboS)
} 
}
fibof()

let palindromo = () =>{
  let palabra = "oto"
  let palabraReves=[...palabra].reverse().join("");

  if(palabra===palabraReves){
    console.log("es un palindromo")
  }else{
      console.log("no un palindromo")
  }
}


palindromo();
