function solution(s){
    var answer = true;
    var balance = 0;

    if(s[0] === ")" || s[s.length-1] !== ")"){
        return answer = false;
    }else{
        for(let i = 0; i < s.length; i++){
            if(s[i] === "("){
                balance++;
            }else{
                balance--;
                if(balance < 0) return false;
            }
        }
    }

    return balance=== 0 ? true : false;
}

solution("())(()");

// "()()"	true
// "(())()"	true
// ")()("	false
// "(()("	false