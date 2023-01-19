def solution(sides):
    t = [i for i in range(max(sides) - min(sides) + 1, sum(sides))]
    return len(t)