function solution(citations) {
    let n = citations.length;

    citations = citations.sort().reverse();

    let index = 0;
    while(index + 1<= citations[index]){
        index += 1;
    }
    return index;
}

console.log(solution([31,66]));

/*vector c1 = { 4, 4, 4, 5, 0, 1, 2, 3}; // 4
vector c2 = { 3, 0, 6, 1, 5 }; // 3
vector c3 = { 0, 0 ,1 ,1 }; // 1
vector c4 = { 0, 1 }; // 1
vector c5 = { 2, 7, 5 }; // 2
vector c5 = { 10, 11, 12, 13 }; // 4*/
