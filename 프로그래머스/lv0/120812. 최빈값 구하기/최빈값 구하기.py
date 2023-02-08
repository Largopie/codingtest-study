def solution(array):
    arr = [0 for _ in range(1000)]
    for i in array:
        arr[i]+=1
    return -1 if arr.count(max(arr)) >= 2 else arr.index(max(arr))