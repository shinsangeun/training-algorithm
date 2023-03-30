function solution(s) {
    var arr = s.split(' ');
    var answer = '';
    var result = arr.map((item) => item ? item[0].toUpperCase() + item.slice(1).toLowerCase() : '')

    answer = result.join(' ');
    return answer;
}

solution("3people unFollowed me");