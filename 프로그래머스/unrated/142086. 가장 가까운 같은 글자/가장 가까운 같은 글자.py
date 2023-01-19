def solution(s):
    answer = []
    position = {}
    for i in range(len(s)):
        if s[i] in position.keys():
            answer.append(i - position[s[i]])
        else:
            answer.append(-1)
        position[s[i]] = i
    return answer