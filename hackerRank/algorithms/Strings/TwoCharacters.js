// Complete the alternate function below.
function alternate(s) {
    let n = s.length;
    let ans = 0;
    for(let i = 0; i<26; i++){
        for(let j = 0; j<26; j++){
            console.log("i:", i, "j:", j);

            if(i===j) continue;
            let p1 = i;
            let p2 = j;
            let flag = 1;
            let l = 0;

            for(let c in s){
                if ((c.charCodeAt(0) - ('a').charCodeAt(0) !== p1) && (c.charCodeAt(0) - ('a').charCodeAt(0) !== p2)){
                    continue;
                }
                if((c.charCodeAt(0) - ('a').charCodeAt(0) === p1)){
                    l = l + 1;
                    p1, p2 = p2, p1;
                }else{
                    flag = 0;
                }
            }
            if((flag === 1) && (l>1)){
                ans = Math.max(ans, l);
                console.log("ans22:", ans);
            }
            //console.log("ans:", ans);
        }
    }
    console.log("ans:", ans);

}

alternate("beabeefeab");
