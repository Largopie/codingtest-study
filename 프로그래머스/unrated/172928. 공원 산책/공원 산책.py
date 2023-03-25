def solution(park, routes):
    move = {'E': (0,1), 'W': (0,-1), 'S':(1,0), 'N':(-1,0)}
    h = len(park) -1
    w = len(park[0]) -1
    myPos = [0, 0]

    for i in range(len(park)):
        for j in range(len(park[0])):
            if park[i][j] == 'S':
                myPos = [i,j]
                break

    print(myPos)
    
    for i in routes:
        way, dis = i.split(' ')
        dis = int(dis)    
        saveX=myPos[1]
        saveY=myPos[0]
        
        for _ in range(dis):
            print(way, dis)
            myPos[0]+=move[way][0]
            myPos[1]+=move[way][1]
            print('move->', myPos)
            if myPos[1] > w or myPos[0] > h or myPos[0] < 0 or myPos[1] < 0:
                myPos = [saveY, saveX]
                break
            if park[myPos[0]][myPos[1]] == 'X':
                myPos = [saveY, saveX]
                break
        print('for End', myPos)
    return myPos