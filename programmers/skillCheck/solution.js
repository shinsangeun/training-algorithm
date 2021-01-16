// [1], [1,2], [1,2,3], ...
function solution(k) {
    let array = [];

    for(let i = 1; i <= k; i++){
        array.push(i);
        for(let j=1; j<=i; j++){
            array.push(j);

            checkLength(array, k);
        }
    }
}

function checkLength(array, k){
    if(array.length >= k){
        return array[k-1];
    }
}
solution(10);