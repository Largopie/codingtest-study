function solution(strings, n) {
    return strings.sort((prev, cur) => {
        if(prev[n] !== cur[n]){
            return (prev[n] > cur[n]) ? 1 : -1;
        }
        return (prev > cur) ? 1 : -1;
    })
}