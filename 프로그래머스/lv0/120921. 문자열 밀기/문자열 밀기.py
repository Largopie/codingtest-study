def solution(A, B):
    if A==B: return 0
    for i in range(1, len(A)+1):
        if A[-i:]+A[0:-i] == B:
            return i
    return -1