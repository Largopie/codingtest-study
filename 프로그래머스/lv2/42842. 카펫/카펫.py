def solution(brown, yellow):
    area = brown + yellow
    for b in range(1, area+1):
        if (area / b) - (area // b) == 0:
            a = area//b
            if b >= a:
                if 2*a + 2*b == brown + 4:
                    return [b,a]