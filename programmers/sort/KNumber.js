function solution(array, commands) {
    var answer = [];
    for(var i = 0; i < commands.length; i++){
        var result = array.slice(commands[i][0]-1 , commands[i][1]);

        console.log("1: ", commands[0][0], commands[0][1], result);
        result.sort((a,b)=> a - b);

        console.log("result: ", result);
        var result2 = result[commands[i][2] - 1];
        console.log("result2:", result2);
        answer.push(result2);
    }
    console.log("ans:", answer);

    return answer;
}

console.log(solution([1,5,2,6,3,7,4], [[2,5,3],[4,4,1],[1,7,3]]));