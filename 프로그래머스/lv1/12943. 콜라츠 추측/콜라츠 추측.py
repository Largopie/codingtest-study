def solution(num):
    count=0
    if num == 1:
            return 0
    while(1):
        if num % 2 == 0:
            num /= 2
            count+=1
            if num == 1:
                return count
        elif num %2 == 1:
            num = num * 3 + 1
            count+=1
        if count == 500:
            return -1