
function classificarNota(nota) {
  if (nota >= 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}


console.log(classificarNota(8.5));
console.log(classificarNota(5.2));