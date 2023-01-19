def solution(a,b,n):
    answer=0
    newCoke=0
    rem=0
    while n > a-1:
        newCoke=b * (n//a)
        rem=n%a
        answer += newCoke
        n = newCoke + rem
    return answer