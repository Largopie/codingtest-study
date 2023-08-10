function solution(n, lost, reserve) {
    const people = new Array(n).fill(1);
    for(val of lost) people[val-1] -= 1;
    for(val of reserve) people[val-1] += 1;
    
    for(let i=0; i < people.length; i++){
        if(people[i] === 2 && people[i-1] === 0){
            people[i-1] = 1;
            people[i] = 1;
        }
        if(people[i] === 2 && people[i+1] === 0){
            people[i+1] = 1;
            people[i] = 1;
        }
    }
    return people.filter((item) => item !== 0).length;
}