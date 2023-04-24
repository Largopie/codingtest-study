def solution(arr, flag):
    X = []
    for i in range(len(arr)):
        if flag[i] == True:
            for _ in range(arr[i]*2):
                X.append(arr[i])
        else:
            for _ in range(arr[i]):
                X.pop()
    return X