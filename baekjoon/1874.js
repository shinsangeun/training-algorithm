function test(n){
    let count = 1;
    let stack = [];
    let result = [];

    for(let i = 1; i < n +1; i++){
        let data;
        while(count <= data){
            stack.push(count);
            count += 1;
            result.push('+')
        }
        if(stack[-1] === data){
            stack.pop();
            result.push('-')
        }else{
            console.log("NO")
        }
        console.log("result:", result)
    }
}

test(8,4,3,6,8,7,5,2,1)