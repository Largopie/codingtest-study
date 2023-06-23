def solution(arr):
    start = -1
    end = -1
    for i in range(len(arr)):
        if arr[i] == 2:
            start = i
            break
    if start == -1:
        return [-1]
    
    for i in range(len(arr) - 1, -1, -1):
        if arr[i] == 2:
            end = i
            break
    return arr[start:end+1]
            