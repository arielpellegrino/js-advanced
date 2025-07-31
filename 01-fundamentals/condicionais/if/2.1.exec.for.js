function checkIdade(idade) {
  if (idade >= 0 && idade <= 12) {
    return console.log('Criança');
  } else if (idade >= 13 && idade <= 17) {
    return console.log('Adolescente');
  } else if (idade >= 18 && idade <= 58) {
    return console.log('Adulto');
  } else if (idade >= 60) {
    return console.log('Idoso');
  } else {
    return "idade invalida";
  }
}

checkIdade(11)
checkIdade(15)
checkIdade(21)
checkIdade(62)
checkIdade(-1)