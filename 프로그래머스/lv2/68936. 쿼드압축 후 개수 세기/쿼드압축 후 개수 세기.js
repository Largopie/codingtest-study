function solution(arr) {
    const answer = [0, 0];
    
    const resolve = (arr) => {
        if(arr.every((row) => row.every((item) => item === 0))) return [1, 0];
        if(arr.every((row) => row.every((item) => item === 1))) return [0, 1];
        
        const len = arr.length;
        const a1 = arr.splice(0, len / 2),
              a2 = a1.map((arr) => arr.splice(len / 2, len / 2)),
              a3 = arr,
              a4 = a3.map((arr) => arr.splice((len / 2, len / 2)));
        
        return [a1, a2, a3, a4].reduce((answer, cur) => resolve(cur).map((v, i) => answer[i] + v), [0, 0]);
    };
    
    return resolve(arr);
    
}