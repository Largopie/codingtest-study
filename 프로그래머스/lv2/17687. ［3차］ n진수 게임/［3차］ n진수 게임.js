function solution(n, t, m, p) {
    const arr = []
    let answer = ''
    for(let i=0; i <= t*m; i++){
        i.toString(n).split('').map((item) => arr.push(item.toUpperCase()))
    }
    
    for(let i=p-1; i < t*m; i+=m){
        answer+=arr[i]
    }
    
    return answer
}