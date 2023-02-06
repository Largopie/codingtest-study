def solution(n):
    i = 2
    m = []
    while n > 1:
        if n % i == 0:
            m.append(i)
            n //= i
        else:
            i+=1
    return sorted(list(set(m)))