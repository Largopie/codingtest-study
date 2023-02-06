def solution(emergency):
    ranking=[]
    rank=1
    for i in range(len(emergency)):
        ranking.append(0)
    for i in sorted(emergency, reverse=True):
        ranking[emergency.index(i)] = rank
        rank+=1
    return ranking