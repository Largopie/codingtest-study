a=list(map(int,input().split()))
b = list(set(a))
if(len(b) == 1):
    print(10000 + (b[0]*1000))
elif(len(b) == 2):
    for i in range(1, 7):
        cnt = a.count(i)
        if(cnt == 2):
            print(1000+i*100)
            break
elif(len(b) == 3):
    print(max(a[0], a[1], a[2]) * 100)

