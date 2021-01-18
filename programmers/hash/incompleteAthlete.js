function solution(participant, completion) {
    let sort1 = participant.sort();
    let sort2 = completion.sort();

    for(let i in sort1){
       if(sort1[i] !== sort2[i]){
           return sort1[i];
       }
    }
}

solution(	["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]);