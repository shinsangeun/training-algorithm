function solution(s) {
    var replaceNum = s.split(' ');
    var toNumbers = arr => arr.map(Number);
    var convertArr = toNumbers(replaceNum);
    var answer = '';
    var minNumArr = convertArr.sort(function(a,b){return a - b})
    answer = minNumArr[0].toString()

    var maxNumArr = convertArr.sort(function(a,b){return b - a})
 
    answer = answer + ' ' + maxNumArr[0].toString();
    return answer;
}

solution("-1 -1")