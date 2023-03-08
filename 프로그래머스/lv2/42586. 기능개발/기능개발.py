import math

def solution(progresses, speeds):
    dic = {}
    for idx in range(len(progresses)):
        day = math.ceil((100-progresses[idx]) / speeds[idx])
        if list(dic.keys()) != [] and list(dic.keys())[-1] >= day:
            dic[list(dic.keys())[-1]]+=1
        else:
            dic[day] = dic.get(day, 0) + 1
    return list(dic.values())