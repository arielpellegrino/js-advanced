
function verificarParidade(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

console.log(verificarParidade(10));
console.log(verificarParidade(7));