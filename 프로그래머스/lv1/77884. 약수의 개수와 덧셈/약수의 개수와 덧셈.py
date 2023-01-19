def solution(left, right):
    answer = 0
    for i in range(left, right + 1):
        cnt = 0
        for j in range(1, int(i**(1/2)) + 1):
            if i % j == 0:
                cnt += 1
                if j ** 2 != i:
                    cnt +=1
        if cnt % 2 == 0:
            answer += i
        else:
            answer -= i
    return answer