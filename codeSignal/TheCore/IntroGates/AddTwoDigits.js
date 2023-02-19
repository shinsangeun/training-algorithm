function solution(n){
    let arrayNum = [...n.toString()]
    console.log("test:", parseInt(arrayNum[0]) + parseInt(arrayNum[1]))
    return parseInt(arrayNum[0]) + parseInt(arrayNum[1]);
}

solution(29);