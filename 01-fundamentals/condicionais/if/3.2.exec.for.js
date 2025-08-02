function checkPassword(pass){

    const problemas = [];
    const checkSize = pass.length < 8 ? true : false;
    const checkUperCase = /[A-Z]/.test(pass);
    const checkLowerCase = /[a-z]/.test(pass);
    const checkNumber = /[0-9]/.test(pass);
    const checkSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(pass);
    return {

    }
}

console.log(checkPassword("Aa$a1aa")); 