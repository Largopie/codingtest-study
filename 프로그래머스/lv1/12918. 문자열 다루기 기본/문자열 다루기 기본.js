function solution(s) {
    const s_length = s.length;
    if(s_length !== 4 && s_length !== 6) return false;
    for(word of s){
        if(isNaN(word)) return false;
    }
    return true;
}