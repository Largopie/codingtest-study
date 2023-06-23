def solution(arr, queries):
    for i in queries:
        for j in range(len(arr)):
            if j >= i[0] and j <= i[1] and j % i[2] == 0:
                arr[j] += 1
    return arr