// Complete the superReducedString function below.
function superReducedString(s) {
    let array = [];
    array.push(...s);
    console.log(array);

    let array2 = [];

    for(let i = 0; i<array.length; i++){
        if(array[i] === array[i+1]){
            // array2 = array[i];
            let test = [];
            test.push(array[i], array[i+1]);

            console.log("같네", array[i], test);

            array.splice(array[i], array[i+1]);
            console.log("array:", array);

            // return;
        }else{
            array2.push(array[i]);
            console.log("다르네:", array[i]);
        }

    }
    console.log("result:", array2);

    return array2;
}

superReducedString("aaabccddd");