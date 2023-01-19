def solution(N, stages):
    clear = {}
    people = len(stages)
    for i in range(1,N+1):
        if people != 0:
            count = stages.count(i)
            clear[i] = count / people
            people -= count
        else:
            clear[i] = 0
    return sorted(clear, key=lambda x: clear[x], reverse=True)