def solution(score):
    answer=[]
    m = sorted([sum(i)/2 for i in score], reverse=True)
    for i in score:
        answer.append(m.index(sum(i)/2)+1)
    return answer