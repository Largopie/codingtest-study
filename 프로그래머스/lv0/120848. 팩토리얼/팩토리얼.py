def solution(n):
    a = 1
    for i in range(1, 11):
        a *= i
        print(i)
        if a == n:
            return i
        elif a > n :
            return i-1