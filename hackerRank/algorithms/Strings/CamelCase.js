// Complete the camelcase function below.
function camelcase(s) {
    let array = [];
    array.push(...s);
    console.log("array:", array);

    let result = 1;

    for(let i=0; i<array.length; i++){
        if(array[i] === array[i].toUpperCase()){
            result++;
        }
    }
   
    return result;
}

camelcase("oneTwoThree");