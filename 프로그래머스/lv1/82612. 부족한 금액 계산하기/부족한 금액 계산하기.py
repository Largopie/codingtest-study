def solution(price, money, count):
    allcount = 0
    for i in range(1,count+1):
        allcount += price * i
    if allcount - money <= 0:
        return 0
    return allcount - money