function solution(a, b) {
    const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    const date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let total_day = b;
    for(let i=0; i < a - 1; i++) total_day += date[i];
    
    return week[(total_day - 1) % 7]
}