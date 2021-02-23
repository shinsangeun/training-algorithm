function solution(s) {
    let mok = parseInt((s.length/2).toString());
    return (s.length % 2 === 0 ? s[mok-1] + s[mok] : s[mok]);
}

console.log(solution("abc"));

/* if(s.length % 2 === 0){
     answer += s[mok-1] + s[mok];
 }else{
     answer += s[mok];
 }
 return answer;*/