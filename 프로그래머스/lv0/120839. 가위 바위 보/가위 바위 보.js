function solution(rsp) {
    let answer = '';
    const win = {
        "2": "0",
        "0": "5",
        "5": "2"
    };
    for(str of rsp){
        answer+=win[str];
    };
    return answer;
}