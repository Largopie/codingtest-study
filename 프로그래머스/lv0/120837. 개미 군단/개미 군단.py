def solution(hp):
    answer=0
    for i in [5, 3, 1]:
        count, hp = divmod(hp, i)
        answer+=count
    return answer