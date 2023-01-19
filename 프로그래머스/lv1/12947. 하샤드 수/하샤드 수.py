def solution(x):
    s = 0
    newX = x
    while(newX >= 1):
        s += newX%10
        newX =  int(newX /10)
    return True if x % s == 0 else False