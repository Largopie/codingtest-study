def solution(n):
    answer = []
    def hanoi(n, f, t):
        if n == 1:
            answer.append([f,t])
            return
        else:
            hanoi(n-1, f, 6-f-t)
            answer.append([f,t])
            hanoi(n-1, 6-f-t, t)
    hanoi(n,1,3)
    return answer