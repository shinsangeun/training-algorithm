function solution(clothes) {
    let answer = 1;
    let map = new Map();

    let size = clothes.length;
    for (let i = 0; i < size; i++) {
        if (!map.has(clothes[i][1])){
            map.set(clothes[i][1], 1);
        }else{
            map.set(clothes[i][1], map.get(clothes[i][1]) + 1);
        }
    }

    for (let value of map.values())
        answer *= value + 1;

    // 모두 선택하지 않은 경우는 제외
    return answer - 1;
}

//solution("[[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]]");

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])); // 5