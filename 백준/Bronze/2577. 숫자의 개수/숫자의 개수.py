c=1
for i in range(3):
    a = int(input())
    c *= a
c1 = str(c)
for k in range(10):
    print(c1.count(str(k)))