function solution(prices) {
    const len = prices.length
    const answer = Array.from({length: len}, () => 0)
    const stack = []
    
    prices.forEach((price, idx, arr) => {
        while (stack.length && price < arr[stack.at(-1)]) {
            const fixedIdx = stack.pop()
            answer[fixedIdx] = idx - fixedIdx
        }
        stack.push(idx)
    })
    
    stack.forEach((val) => {
        answer[val] = len - val - 1
    })
    
    return answer
}


// [1,2,3,2,3]
// 1 2 3    2