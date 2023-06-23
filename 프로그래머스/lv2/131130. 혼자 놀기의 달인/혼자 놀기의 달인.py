# 2이상 100이하 자연수 하나 정해  그거보다 작거나 같은 수만큼 상자 준비
def solution(cards):
    answer = []
    dic = {}
    for i in range(len(cards)):
        dic[i] = cards[i]
    
    len_cards = len(cards)
    visit = []
    for i in range(len_cards):
        pointer = i
        while True:
            if dic[pointer] in visit:
                if len(answer) > 0:
                    answer.append(len(visit) - sum(answer))
                else:
                    answer.append(len(visit))
                break
            visit.append(dic[pointer])
            pointer = dic[pointer] - 1
        if len(visit) == len(cards):
            break
    answer.sort(reverse=True)
    a = 1
    if len(answer) > 1:
        for i in range(0, 2):
            a*=answer[i]
        return a
    else:
        return 0
        
        