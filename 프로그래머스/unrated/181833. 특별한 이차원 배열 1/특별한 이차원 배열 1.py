def solution(n):
    arr = []
    for i in range(n):
        subArr = []
        for j in range(n):
            if i == j:
                subArr.append(1)
            else:
                subArr.append(0)
        arr.append(subArr)
    return arr