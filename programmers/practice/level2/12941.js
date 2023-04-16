function solution(A,B){
    var answer = 0;

    var sortA = A.sort(function(a,b){return a-b;});
    var sortB  = B.sort(function(a,b){return b-a;});

    //var sortA = A.sort();
    // var sortB = B.sort().reverse();

    for(let i = 0; i < sortA.length; i++){
        answer += sortA[i] * sortB[i];
    }

    console.log("ans:", answer)
    return answer;
}

solution([1,2], [3,4])