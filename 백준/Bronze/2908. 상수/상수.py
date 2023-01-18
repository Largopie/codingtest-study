a,b = map(list, input().split())
c = [0, 0]
for i in range(3):
    c[0] = c[0] + int(a[i]) * pow(10, i)
    c[1] = c[1] + int(b[i]) * pow(10, i)
print(max(c))