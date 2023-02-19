def solution(n):
    ans = {}
    for i in range(1, n+1):
        if i <= 3:
            ans[i] = i
        else:
            ans[i] = ans[i-1]+ans[i-2]
    return ans[n] % 1234567