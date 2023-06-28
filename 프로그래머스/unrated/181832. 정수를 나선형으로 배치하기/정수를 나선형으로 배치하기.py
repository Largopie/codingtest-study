def solution(n):
    startX = 0
    startY = 0
    endX = n - 1
    endY = n - 1
    
    count = 1
    arr = [[0]*n for _ in range(n)]

    for i in range(1, n*2):
        if i % 4 == 1:
            for j in range(startX, endX + 1):
                arr[startY][j] = count
                count+=1
            startY+=1
            
        if i % 4 == 2:
            for j in range(startY, endY + 1):
                arr[j][endX] = count
                count+=1
            endX-=1
           
        if i % 4 == 3:
            for j in range(endX, startX - 1, -1):
                arr[endY][j] = count
                count+=1
            endY-=1

        if i % 4 == 0:
            for j in range(endY, startY - 1, -1):
                arr[j][startX] = count
                count+=1
            startX+=1
        
    return arr