// Complete the superReducedString function below.
function superReducedString(s) {
    let array = [];
    array.push(...s);
    console.log(array);

    for(let i = 0; i < array.length; i++){
        if(array[i] === array[i+1]){
            array.splice(i, 2);
            i = -1;
        }
    }
    //console.log(array.length === 0 ? "Empty String" : array.join(""))

    return array.length === 0 ? "Empty String" : array.join("");
}

superReducedString("aaabccddd");