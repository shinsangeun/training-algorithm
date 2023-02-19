function solution(n, m){
    let num = parseInt(m / n);

    console.log("n * num:", num, n * num)
    return n * num
}

solution(3, 10);