import sys
a,b=map(int,input().split())
c=list(map(int,sys.stdin.readline().split()))
for i in range(a):
    if(c[i] < b):
        print(c[i],end=' ')