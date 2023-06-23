def solution(arr, queries):
    answer = []
    for j in queries:
        minNum = []
        for i in range(j[0], j[1] + 1):
            if arr[i] > j[2]:
                minNum.append(arr[i])
        if len(minNum) == 0:
            answer.append(-1)
        else:
            answer.append(min(minNum))
    return answer