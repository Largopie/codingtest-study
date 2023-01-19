def solution(k, score):
    answer = []
    honor = []
    for i in score:
        if len(honor) < k:
            honor.append(i)
            honor.sort(reverse = True)
            answer.append(honor[len(honor)-1])
        else:
            if honor[len(honor)-1] < i:
                honor[len(honor)-1] = i
            honor.sort(reverse = True)
            answer.append(honor[len(honor)-1])
    return answer