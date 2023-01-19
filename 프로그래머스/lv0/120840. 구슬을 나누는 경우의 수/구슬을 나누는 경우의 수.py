def solution(balls, share):
    div=1
    number=1
    for i in range(share+1, balls+1):
        number*=i
    for i in range(2, balls-share+1):
        div*=i
    return number//div