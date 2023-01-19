def solution(board):
    bomb = []
    bCnt = len(board)**2
    for i in range(len(board)):
        for j in range(len(board)):
            if board[i][j] == 1:
                for row in range(i-1, i+2):
                    if row < 0:
                        continue
                    if row >= len(board):
                        break
                    for col in range(j-1, j+2):
                        if col < 0:
                            continue
                        if col >= len(board):
                            break
                        bomb.append((row,col))
    return bCnt - len(set(bomb))