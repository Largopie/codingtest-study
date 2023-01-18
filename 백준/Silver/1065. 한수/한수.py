def b(n):
    k = []
    while n >= 1:
        k.append(n % 10)
        n = n // 10
    return k
def a(n):
    k = []
    count = 0
    for i in range(1, n +1):
        if i < 100:
            count += 1
        else:
            k = b(i)
            for m in range(2, len(k)):
                r = 1
                if(k[m] - k[m - 1] != k[m - 1] - k[m - 2]):
                    r = 0
            if r == 1:
                count += 1
    return count

n = int(input())
print(a(n))