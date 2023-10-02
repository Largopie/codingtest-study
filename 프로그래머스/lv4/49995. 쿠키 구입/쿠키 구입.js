function solution(cookie) {
    const sum_arr = [0];
    let sum = 0, max = 0;
    
    for(let i=0; i < cookie.length; i++){
        sum+=cookie[i]
        sum_arr.push(sum)
    }
    
    const len = sum_arr.length;
    
    for(let m=0; m < len; m++) {
        const middleSum = sum_arr[m];
        
        for(let r=m+1; r < len; r++) {
            const right = sum_arr[r] - middleSum;
            if(max >= right) continue;
            
            for(let l=0; l < m; l++) {
                const left = middleSum - sum_arr[l];
                if(right > left) break;
                if(left === right) max = Math.max(max, right)
            }
        }
    }
    
    return max
}

