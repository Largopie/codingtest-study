def solution(clothes):
    dic = {}
    answer=1
    for a, b in clothes:
        dic[b] = dic.get(b, 0)+1
    for i in dic.values():
        answer*=(i+1)
    return answer-1