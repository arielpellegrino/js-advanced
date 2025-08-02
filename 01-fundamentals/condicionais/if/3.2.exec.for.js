function checkPassword(pass){
    const checkSize = pass.length < 8 ? true : false;
    const checkUperCase = /[A-Z]/.test(pass);
    const checkLowerCase = /[a-z]/.test(pass);
    const checkNumber = /[0-9]/.test(pass);
    const checkSpecialCharacter =/^;
    return {
        size: checkSize,
        uperCase: checkUperCase,
        lowerCase: checkLowerCase,
        number: checkNumber,
        specialCharacter: checkSpecialCharacter,
    }
}

console.log(checkPassword("aaaaa")); 