from itertools import permutations

def chk_prime(num):
    cnt = 0
    for i in range(2,int(num**(1/2))+1):
        if num % i == 0:
            return False
    return True

def solution(numbers):
    answer=0
    primeList = []
    for i in range(1, len(list(numbers))+1):
        for j in list(permutations(numbers, i)):
            primeList.append(int(''.join(j)))
    print(set(primeList))
    for i in list(set(primeList)):
        if i <= 1:
            continue
        if chk_prime(i):
            answer+=1
    return answer