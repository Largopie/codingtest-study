import sys
a = int(input())
for i in range(a):
    cnt=0
    b = list(map(int,sys.stdin.readline().split()))
    for k in range(1,len(b)):
        if(b[k] > (sum(b)-b[0])/b[0]):
            cnt+=1 
    print('{:.3f}%'.format(cnt/b[0]*100))