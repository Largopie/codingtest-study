a=int(input())
a1 = a
cnt=0
while(1):
    cnt+=1
    n1 = a1//10
    n2 = a1%10
    s = n1+n2
    a1 = (n2*10) + (s%10)
    if(a == a1):
        break
print(cnt)