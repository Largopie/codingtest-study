function solution(A,B){
    const sortingAbyASC = A.sort((a,b) => a-b)
    const sortingBbyDESC = B.sort((a,b) => b-a)
    let answer = 0;
    
    sortingAbyASC.forEach((val, idx) => {
        answer += (val * sortingBbyDESC[idx])
    })
    
    return answer
}