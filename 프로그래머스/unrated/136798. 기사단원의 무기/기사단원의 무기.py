def solution(number, limit, power):
    answer = 0
    for i in range(1, number+1):
        count = 0
        for k in range(1, int(i**(1/2)) + 1):
            
            if i % k == 0:
                count+=1
                if ((k**2) != i):
                    count+=1
        if count > limit:
            count = power
        answer += count
    return answer