function solution(money) {
    let arr = [];
    arr.push(parseInt(money / 5500));
    arr.push(money % 5500);
    
    return arr;
}