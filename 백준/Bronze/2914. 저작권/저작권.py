songs, avg = map(int,input().split(' '))

melody = songs * avg

while(True):
    melody-=1
    if(melody / songs <= avg - 1):
        break

print(melody + 1)
