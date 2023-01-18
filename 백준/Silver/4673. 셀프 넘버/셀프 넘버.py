a = set(range(1,10001))
b = set()
for i in range(1, 10001):
    for k in str(i):
        i += int(k)
    b.add(i)
s = sorted(a-b)
for i in s:
    print(i)
