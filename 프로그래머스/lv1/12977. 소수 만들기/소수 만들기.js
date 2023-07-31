function solution(nums) {
    const arr = [];
    let answer = 0;
    const isPrimeNumber = (num) => {
        let count = 0;
        for(let i=2; i < parseInt(Math.sqrt(num)) + 1; i++){
            if(num % i === 0) return false;
        }
        return true;
    }
    
    for(let i=0; i < nums.length; i++){
        for(let j=i+1; j < nums.length; j++){
            for(let k=j+1; k < nums.length; k++){
                answer+=(isPrimeNumber(nums[i] + nums[j] + nums[k])) ? 1 : 0;
            }
        }
    }
    
    return answer;
}