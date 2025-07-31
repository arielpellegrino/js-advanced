function checkLogin(username, password) {
  const erros = [];

  if (username.length < 3) {
    erros.push('Username muito curto');
  }
  if (password.length < 6) {
    erros.push('Password muito curso');
  }
  if (erros.length == 0){
    return "Login válido";;
  } else {
    return erros.join(" e ");
  }
}

console.log(checkLogin("duda","12345"));
console.log(checkLogin("dud","1234567"));
console.log(checkLogin("du","1234"));
console.log(checkLogin("dudada","1234567"));