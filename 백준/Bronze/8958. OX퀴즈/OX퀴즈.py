a = int(input())
b = []
for i in range(a):
    c = input()
    b.append(c)
for i in range(a):
    z=0; s = 0;
    for k in range(len(b[i])):
        if(b[i][k] == 'O'):
            s+=1
        elif(b[i][k] == 'X'):
            s=0
        z += s
    print(z)