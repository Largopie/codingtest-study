function solution(numbers) {
    let answer= [1,2,3,4,5,6,7,8,9];
    for(number of numbers){
        answer = answer.filter((item) => item !== number);
    }
    return answer.reduce((a,b) => a+b);
}