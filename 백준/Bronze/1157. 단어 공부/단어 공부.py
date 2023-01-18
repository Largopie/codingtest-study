a = (input())
b = {}
for i in a.upper():
    try: b[i] += 1 
    except:
        b[i] = 1
n = list(b.keys())
m = list(b.values())
k = []
for j in range(len(n)):
    if(m[j] == max(m)):
        k.append(n[j])
if(len(k) >= 2):
    print('?')
else:
    print(k[0])