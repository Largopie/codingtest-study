function solution(people, limit) {
    let count = 0;
    people.sort((a, b) => a - b)
    
    while(people.length !== 0) {
        const heavy = people.pop()
        const light = people.at(0)
        
        if(heavy + light <= limit) people.shift()
        count++
    }
    
    return count
}