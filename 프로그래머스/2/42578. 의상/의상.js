function solution(clothes) {
    let answer = 1
    const kinds = {}
    clothes.forEach(([cloth, kind]) => {
        if(!kinds[kind]) kinds[kind] = 1
        else kinds[kind]+=1
    })
    
    for(count of Object.values(kinds)) {
        answer *= (count + 1)
    }
    
    return answer - 1
}