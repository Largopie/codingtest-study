def solution(n):
    ans = [0 for i in range(n+1)]
    ans[2] = 3
    ans[4] = 11
    for i in range(6, n+1, 2):
        ans[i] = ans[i-2] * 3
        for j in range(i-4, 1, -2):
            ans[i]+=ans[j]*2
        ans[i]+=2
    return ans[n] % 1000000007