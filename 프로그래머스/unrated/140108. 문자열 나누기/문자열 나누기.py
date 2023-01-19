def solution(s):
    answer = 0
    X = ''
    Xcount = 0
    another = 0
    for i in range(len(s)):
        if Xcount == 0:
            X=s[i]
            Xcount+=1
            answer+=1
            continue

        if X == s[i]:
            Xcount+=1
        else:
            another+=1

        if Xcount == another:
            Xcount=0
            another=0
    return answer