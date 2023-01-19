def solution(dartResult):
    scoreList=[]
    score = ''
    for i in dartResult:
        if i == '#':
            scoreList[-1]*=-1
            continue
        if i == '*':
            if len(scoreList) > 1:
                scoreList[-1]*=2
                scoreList[-2]*=2
            else:
                scoreList[-1]*=2

            continue
        if i.isdigit():
            score+=i
        else:
            intScore = int(score)
            if i == 'D':
                intScore **= 2
            if i == 'T':
                intScore **= 3
            scoreList.append(intScore)
            score=''
    return sum(scoreList)