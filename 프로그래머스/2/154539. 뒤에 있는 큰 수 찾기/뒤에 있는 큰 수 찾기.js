function solution(numbers) {
    const length = numbers.length;
    const answer = Array.from({length: length}, () => -1);
    const stack = [];
    
    for(let i = 0; i < length; i++) {
        while(stack && (numbers[stack.at(-1)] < numbers[i])) {
            answer[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }
    
    return answer;
}