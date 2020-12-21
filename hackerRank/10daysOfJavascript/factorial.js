'use strict';

function factorial(a) {
    let result = 1;
    for(let i = 2; i<=a; i++){
        result *= i;
    }
    return result;
}

factorial(4);
