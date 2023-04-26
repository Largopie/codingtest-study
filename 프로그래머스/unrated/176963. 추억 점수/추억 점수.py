def solution(name, yearning, photo):
    dic ={}
    answer = []
    for idx in range(len(name)):
        dic[name[idx]]=yearning[idx]

    for i in photo:
        score=0
        for j in i:
            score+=dic.get(j,0)
        answer.append(score)
    
    return answer
