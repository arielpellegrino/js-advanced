function checkPassword(pass) {
    let isValid = null;
    const problemas = [];

    const checkSize = pass.length < 8 ? true : false;
    const checkUperCase = /[A-Z]/.test(pass);
    const checkLowerCase = /[a-z]/.test(pass);
    const checkNumber = /[0-9]/.test(pass);
    const checkSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(pass);

    if (checkSize) {
        problemas.push("Senha menor que 8 caracteres");
    }

    if (!checkUperCase) {
        problemas.push("Pelo menos uma letra deve ser maiúscula");
    }

    if (!checkLowerCase) {
        problemas.push("Pelo menos uma letra deve ser minúscula");
    }

    if (!checkNumber) {
        problemas.push("A senha deve conter pelo menos 1 numero");
    }

    if (!checkSpecialCharacter) {
        problemas.push("A senha deve conter pelo menos 1 caractere especial");
    }

    if (checkSize == true && checkUperCase == true && checkLowerCase == true && checkNumber == true && checkSpecialCharacter == true
    ) {
         isValid = true;
    } else {
        isValid = false
    }

    return {
        válida: isValid,
        problemas: problemas.join(" - ")
    }
}

console.log(checkPassword("Aaa@a1aaa")); 