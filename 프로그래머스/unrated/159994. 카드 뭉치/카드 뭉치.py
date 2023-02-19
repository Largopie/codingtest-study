def solution(cards1, cards2, goal):
    for i in goal:
        if len(cards1) > 0 and cards1[0] == i:
            del cards1[0]
            continue
        if len(cards2) > 0 and cards2[0] == i:
            del cards2[0]
            continue
        return "No"
    return "Yes"