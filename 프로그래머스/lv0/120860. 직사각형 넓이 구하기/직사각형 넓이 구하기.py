def solution(dots):
    x = []
    y = []
    for i in dots:
        x.append(i[0])
        y.append(i[1])
    return (max(x)-min(x)) * (max(y)-min(y))