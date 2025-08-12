function soma(x,y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('x e y precisam ser numeros');
    }

    return  x + y;
}

console.log(soma(1, 'a'))