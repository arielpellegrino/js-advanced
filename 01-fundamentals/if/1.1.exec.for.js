
function verificarIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}


console.log(verificarIdade(18));
console.log(verificarIdade(16));