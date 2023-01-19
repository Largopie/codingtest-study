def solution(k, m, score):
    answer = 0
    s = list(reversed(sorted(score)))
    for i in range(m-1,len(s), m):
        answer+= s[i]*m
    return answer