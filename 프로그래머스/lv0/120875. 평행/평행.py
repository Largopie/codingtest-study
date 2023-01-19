def solution(dots):
    a=[]
    for i in range(len(dots)):
        for j in range(i+1, len(dots)):
            l=(dots[j][1]-dots[i][1]) / (dots[j][0]-dots[i][0])
            if l in a:
                return 1
            a.append(l)
    return 0