def solution(arr):
    flag = 1
    for i in range(len(arr)//2 + 1):
        for j in range(len(arr)//2 + 1):
            if arr[i][j] != arr[j][i]:
                flag = 0
    return flag