def solution(d, budget):
    money = 0
    cnt = 0
    d = sorted(d)
    for i in d:
        money += i
        print(cnt)
        print('i=',i)
        if money > budget:
            money -= i
            return cnt
        cnt += 1
    return cnt