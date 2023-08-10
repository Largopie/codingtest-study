function solution(s) {
    let answer = 0, diff_count = 0, same_count = 0
    let character = ''
    
    for(c of s){
        if(character === '') character = c;
        
        (c === character) ? same_count++ : diff_count++
        
        if(diff_count === same_count){
            answer++
            character = ''
            diff_count = 0
            same_count = 0
        }
    }
    
    if(diff_count + same_count) answer++;
    return answer
}