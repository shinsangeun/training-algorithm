function filterNumbersFromArray(arr: any[]): void {
    // arr.shift()
    for(let i = 0; i <arr.length; i++){
        if(typeof(arr[i]) === "string"){
            arr[i].slice(arr[i])
        }
    }
    // Write the code that goes here
}

var arr = [1, 'a', 'b', 2];
filterNumbersFromArray(arr);
console.log(arr);