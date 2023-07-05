def solution(m, n, startX, startY, balls):
    answer = []
    for x, y in balls:
        distance = []
        # 위쪽 벽에 맞는 경우
        if not (startX == x and startY < y):
            dis = (startX - x)**2 + (2*n - startY - y)**2
            distance.append(dis)
            
        # 아래쪽 벽에 맞는 경우
        if not (startX == x and startY > y):
            dis = (startX - x)**2 + (startY + y)**2
            distance.append(dis)
        
        # 왼쪽 벽에 맞는 경우
        if not (startY == y and startX > x):
            dis = (startY - y)**2 + (startX + x)**2
            distance.append(dis)
        
        # 오른쪽 벽에 맞는 경우
        if not (startY == y and startX < x):
            dis = (startY - y)**2 + (2*m - startX - x)**2
            distance.append(dis)
        answer.append(min(distance))
    return answer