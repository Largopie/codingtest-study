def solution(want, number, discount):
    dic = dict()
    answer = 0
    for idx in range(len(want)):
        dic[want[idx]] = number[idx]

    for i in range(len(discount) - 9):
        wantDic = dic.copy()
        
        for j in range(i, i + 10):
            if discount[j] in wantDic.keys() and wantDic[discount[j]] > 0:
                wantDic[discount[j]] -= 1
        if sum(wantDic.values()) <= 0:
            answer+=1

    return answer
