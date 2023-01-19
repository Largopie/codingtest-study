def solution(board, moves):
    basket = []
    count = 0
    for i in moves:
        for j in range(len(board)):
            if board[j][i-1] != 0:
                if len(basket) > 0 and basket[len(basket)-1] == board[j][i-1]:
                    basket.pop(len(basket)-1)
                    count += 2
                    board[j][i-1] = 0
                    break
                else:
                    basket.append(board[j][i-1])
                    board[j][i-1] = 0
                    break
    print(basket)
    return count