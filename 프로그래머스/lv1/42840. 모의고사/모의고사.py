def solution(answers):
    answer = []
    cor = {1:0, 2:0, 3:0}
    p1 = [1,2,3,4,5]
    p2 = [2,1,2,3,2,4,2,5]
    p3 = [3,3,1,1,2,2,4,4,5,5]

    for i in range(len(answers)):
        if p1[i % len(p1)] == answers[i]:
            cor[1] += 1
        if p2[i % len(p2)] == answers[i]:
            cor[2] += 1
        if p3[i % len(p3)] == answers[i]:
            cor[3] += 1
    for i in cor.keys():
        if cor[i] == max(cor.values()):
            answer.append(i)
    return answer
