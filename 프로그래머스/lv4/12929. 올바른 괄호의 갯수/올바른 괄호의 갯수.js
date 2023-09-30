function solution(n) {
    dp = [1, 1, 2, 5]
    // dp[1] = dp[0]
    // dp[2] = (dp[0] * dp[1]) + (dp[1] * dp[0])
    // dp[3] = (dp[0] * dp[2]) + (dp[1] * dp[1]) + (dp[2] * dp[0])
    // dp[4] = (dp[0] * dp[3]) + (dp[1] * dp[2]) + (dp[2] * dp[2]) + (dp[3] * dp[0])
    if(n < 4) return dp[n];
    else {
        for(let i=4; i <= n; i++) {
            let sum = 0;
            for(let j=0; j < i; j++) {
                sum += (dp[j] * dp[i-1-j]);
            }
            dp.push(sum);
        }
    }
    
    return dp[n]
}
