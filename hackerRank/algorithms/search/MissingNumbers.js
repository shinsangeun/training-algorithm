// Complete the missingNumbers function below.
function missingNumbers(arr, brr) {
    let sortArr = arr.sort();
    let sortBrr = brr.sort();

    let test = [];

    for(let i = 0; i < sortBrr.length; i++){
        if(sortArr[i] !== sortBrr[i]){
            test.push(sortBrr[i]);
            console.log("test:", test);

            sortBrr.unshift();
            console.log("arr:", sortArr);
            console.log("brr:", sortBrr);

        }else{
            sortArr.unshift();
            sortBrr.unshift();
        }
    }
    console.log("test:", test);

    return test;
}

missingNumbers([203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
    [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]);
