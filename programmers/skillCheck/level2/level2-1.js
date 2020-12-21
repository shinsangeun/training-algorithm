function solution(people, limit) {
    var answer = 0;

    let peopleSort = people.sort();
    console.log("peopleSort:", peopleSort);

    for(let i = 0; i< peopleSort.length; i++){
        let result = peopleSort[i] + peopleSort[i+1];
        i = i+1;
        console.log("result:", result);
        if(result <= limit){
            answer = answer + 1;
            console.log("answer1:", answer);
        }else if(result > limit){
            answer = answer + 2;
            console.log("answer2:", answer);
        }else if(isNaN(result)){
            answer = answer + 1;
        }
    }
    console.log("ans:", answer);
    return answer;
}

solution([70,80,50,50,40,240], 240);