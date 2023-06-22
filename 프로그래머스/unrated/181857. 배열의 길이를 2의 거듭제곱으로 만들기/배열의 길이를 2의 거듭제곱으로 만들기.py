def solution(arr):
    a = [2**i for i in range(11)]

    for i in a:
        if i - len(arr) >= 0:
            return arr+[0]*(i-len(arr))