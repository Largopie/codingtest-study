def solution(s1, s2):
    answer=0
    for fs in s1:
        for ss in s2:
            if fs == ss:
                answer+=1
    return answer