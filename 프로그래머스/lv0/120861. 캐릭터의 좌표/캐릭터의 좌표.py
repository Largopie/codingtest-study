def solution(keyinput, board):
    position = [0,0]
    for i in keyinput:
        if i == "left":
            if position[0] > -(board[0] // 2):
                position[0] -= 1
        elif i == "right":
            if position[0] < board[0] // 2:
                position[0] += 1
        elif i == "up":
            if position[1] < board[1] // 2:
                position[1] +=1
        elif i == "down":
            if position[1] > -(board[1] // 2):
                position[1] -= 1
    return position