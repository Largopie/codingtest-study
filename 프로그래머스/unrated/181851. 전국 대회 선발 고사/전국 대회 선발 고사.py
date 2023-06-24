def solution(rank, attendance):
    answer = []
    dic = {}

    for i in range(len(rank)):
        dic[rank[i]] = i
        if attendance[i]:
            answer.append(rank[i])
    answer.sort()
    return (dic[answer[0]]*10000) + (dic[answer[1]]*100) + dic[answer[2]]