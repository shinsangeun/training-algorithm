function solution(numbers) {
    // 정답
    var answer = numbers.sort((a,b) => (b.toString() + a.toString())-(a.toString() + b.toString())).join('');

    /* 나의 풀이
    var answer = '';

    let numberSort = numbers.sort();
    // console.log("numberSort:", numberSort.reverse());
    let reverseNumber = numberSort.reverse();

    for(let i in reverseNumber){
        answer += reverseNumber[i];
        console.log("answer:", answer);
    }*/

    if(answer[0] === "0"){
        answer = "0";
    }

    console.log("answer2:", answer.toString());
    return answer;
}

console.log(solution([12, 121]));