n = int(input())
for _ in range(n):
    a,b = input().split()
    for i in range(len(b)):
        for j in range(int(a)):
            print(b[i], end='')
    print()