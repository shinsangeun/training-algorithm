function solution(s) {
    var answer = [];
    var count = 0;
    var zeroCount = 0;
    var string = '';

    count === 0 ? string = s : string = CheckLength(string).res.length.toString(2)

    while(string.length > 1){
        count += 1;
        zeroCount += CheckLength(string).zero;
        string = CheckLength(string).res.length.toString(2)

        if(string.length === 1) break;
    }

    answer.push(count, zeroCount)
    return answer;
}

function CheckLength(num) {
    let res = [];
    for(let i = 0; i< num.length; i++){
        if(num[i] !== "0"){
            res.push(num[i]);
        }
    }
    return {res: res, zero: num.length - res.length};
}

solution("1111111")