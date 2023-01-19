def solution(lottos, win_nums):
    answer = []
    rank = [6,6,5,4,3,2,1]
    l_count = h_count = 0

    for i in lottos:
        if i != 0:
            if i in win_nums:
                l_count += 1
                h_count += 1
        else:
            h_count += 1
    answer.append(rank[h_count])
    answer.append(rank[l_count])
    return answer