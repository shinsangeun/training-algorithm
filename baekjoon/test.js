function filterNumbersFromArray(arr) {
    // arr.shift()
    for (var i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == "string") {
            arr[i].slice(arr[i],0);
        }
    }
    // Write the code that goes here
}
var arr = [1, 'a', 'b', 2];
console.log(typeof(arr[1]))
filterNumbersFromArray(arr);
console.log(arr);
