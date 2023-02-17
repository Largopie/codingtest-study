def solution(n,a,b):
    stage = 0
    while a != b:
        a = (a//2)+(a%2)
        b = (b//2)+(b%2)
        stage+=1
    return stage