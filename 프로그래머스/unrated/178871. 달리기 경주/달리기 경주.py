def solution(players, callings):
    answer = []
    dic = {}
    for idx, val in enumerate(players):
        dic[val] = idx

    for player in callings:
        p1, p2 = dic[player] - 1, dic[player]
        dic[players[p1]] = p2
        dic[players[p2]] = p1
        players[p2],players[p1] = players[p1],players[p2]
    
    return players

