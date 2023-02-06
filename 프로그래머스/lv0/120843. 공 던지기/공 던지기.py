def solution(numbers, k):
    p = 1
    for i in range(k-1):
        p+=2
        if p > len(numbers):
            p -= len(numbers)
    return p