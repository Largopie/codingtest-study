def solution(picture, k):
    answer = []
    for i in range(len(picture)):
        string = ''
        for j in picture[i]:
            string+=j*k
        for _ in range(k):
            answer.append(string)
    return answer